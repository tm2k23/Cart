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
    render(){
        return (
            <div className="cart">
                {
                    this.state.products.map((product)=>{
                        return <CartItem product={product}/>
                    })
                }
            </div>
        )
    }
};

export default Cart;