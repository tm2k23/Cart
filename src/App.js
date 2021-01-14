import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
class App extends React.Component {
    constructor(){
        super(); // to call the constructor of base class
        this.state={
            products:[
                {
                    title:'Mobile',
                    price:1099,
                    qty:10,
                    img:'',
                    id:1
                },
                {
                    title:'Watch',
                    price:199,
                    qty:5,
                    img:'',
                    id:2
                },
                {
                    title:'Laptop',
                    price:19999,
                    qty:9,
                    img:'',
                    id:3
                }
            ]
        }
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
            </div >
        );
    }
}

export default App;