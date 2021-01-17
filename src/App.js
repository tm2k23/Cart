import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase/app';
class App extends React.Component {
    constructor(){
        super(); // to call the constructor of base class
        this.state={
            products:[],
            loading:true
        }
    }

    /*componentDidMount(){
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
                const product=doc.data();
                product['id']=doc.id;
                return product;
            });
            this.setState({
                products:products,
                loading:false
            })
        })
    }*/

    componentDidMount(){
        firebase
        .firestore()
        .collection('products')
        .onSnapshot((snapshot)=>{
            const products=snapshot.docs.map((doc) => {
                const product=doc.data();
                product['id']=doc.id;
                return product;
            });
            this.setState({
                products:products,
                loading:false
            })
        })
    }

    addProduct=()=>{
        firebase
        .firestore()
        .collection('products')
        .add({
            title:"Washing Machine",
            qty:3,
            price:9000,
            img:""
        })
        .then((docRef)=>{
            console.log(docRef);
        })
    }

    handleIncreaseQuantity=(product)=>{
        const products = this.state.products;
        let productIndex = products.indexOf(product);
        // products[productIndex].qty+=1;
        // this.setState({
        //     products:products
        // })
        const docRef=firebase.firestore().collection('products').doc(products[productIndex].id);
        docRef
        .update({
            qty:products[productIndex].qty+1
        })
        .then(()=>{
            console.log('quantity updated successfully');
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    handleDecreaseQuantity=(product)=>{
        const products = this.state.products;
        let productIndex = products.indexOf(product);
        // if(products[productIndex].qty===0)
        //     return ;
        // products[productIndex].qty-=1;
        // this.setState({
        //     products:products
        // })
        if(products[productIndex].qty > 0)
        {
            const docRef=firebase.firestore().collection('products').doc(products[productIndex].id);
            docRef
            .update({
                qty:products[productIndex].qty-1
            })
            .then(()=>{
                console.log('quantity decreased successfully');
            })
            .catch((error)=>{
                console.error(error);
            })
        }
    }
    handleDeleteProduct=(id)=>{
        // const products = this.state.products;
        // console.log(products);
        // const items = products.filter((item)=>item.id !== id);
        // // console.log(items);
        // this.setState({
        //     products:items
        // })
        const docRef=firebase.firestore().collection('products').doc(id);
        docRef
        .delete()
        .then(()=>{
            console.log('Product deleted successfully');
        })
        .catch((error)=>{
            console.error(error);
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
                <button onClick={()=>{this.addProduct()}}>Add Product</button>
                <Cart
                products={this.state.products} 
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct} 
                />
                {this.state.loading && <h1>Loading Products...</h1>}
                <h2 style={{padding:5,margin:0}}>Total : {this.getCartTotal()}</h2>
            </div >
        );
    }
}

export default App;