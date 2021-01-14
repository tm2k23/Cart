import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super(); // to call the constructor of base class
        this.state={
            products:[
                {
                    title:'Mobile',
                    price:1099,
                    qty:10,
                    img:''
                },
                {
                    title:'Watch',
                    price:199,
                    qty:5,
                    img:''
                },
                {
                    title:'Laptop',
                    price:19999,
                    qty:9,
                    img:''
                }
            ]
        }
    }
    handleIncreaseQuantity=(product)=>{
        // console.log('hey, increase the quantity if this product ',product);
        // let productIndex = this.state.products.indexOf(product);
        // this.state.products[productIndex].qty+=1;
        // this.setState({
        //     products:this.state.products
        // })
        const products = this.state.products;
        let productIndex = products.indexOf(product);
        products[productIndex].qty+=1;
        this.setState({
            products:products
        })
    }
    render(){
        return (
            <div className="cart">
                {
                    this.state.products.map((product)=>{
                        return <CartItem product={product} onIncreaseQuantity={this.handleIncreaseQuantity}/>
                    })
                }
            </div>
        )
    }
};

export default Cart;