import React from 'react';
import CartItem from './CartItem';
const Cart=(props)=>{
    return (
        <div className="cart">
            {
                props.products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct} 
                    key={product.id}/>
                })
            }
        </div>
    )
    
};

export default Cart;