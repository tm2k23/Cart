import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase/app';
class App extends React.Component {
    constructor(){
        super(); // to call the constructor of base class
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        firebase
        .firestore()
        .collection('products')
        .get()
        .then((snapshot)=>{
            // console.log('snapshot',snapshot);
            // console.log('snapshot.docs',snapshot.docs);
            // snapshot.docs.map((doc) => {
            //     console.log(doc.data());
            // });
            const products=snapshot.docs.map((doc) => {
                return doc.data();
            });
            this.setState({
                products:products
            })
        })
    }

    handleIncreaseQuantity=(product)=>{
        const products = this.state.products;
        let productIndex = products.indexOf(product);
        products[productIndex].qty+=1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity=(product)=>{
        const products = this.state.products;
        let productIndex = products.indexOf(product);
        if(products[productIndex].qty===0)
            return ;
        products[productIndex].qty-=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct=(id)=>{
        const products = this.state.products;
        // console.log(products);
        const items = products.filter((item)=>item.id !== id);
        // console.log(items);
        this.setState({
            products:items
        })
    }
    getCartCount=()=>{
        let count = 0 ;
        this.state.products.forEach((product)=>{
            count+=product.qty;
        })
        return count;
    }
    getCartTotal=()=>{
        let totalCost = 0 ;
        this.state.products.forEach((product)=>{
            totalCost+=product.qty*product.price;
        })
        return totalCost;
    }
    render(){
        return ( 
            <div className = "App">
                <Navbar count={this.getCartCount()}/>
                <Cart
                products={this.state.products} 
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct} 
                />
                <h2 style={{padding:5,margin:0}}>Total : {this.getCartTotal()}</h2>
            </div >
        );
    }
}

export default App;