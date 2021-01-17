import React from 'react';
const CartItem = (props) => {
    const {title,price,qty}=props.product;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={props.product.img} ></img>
            </div>
            <div className="right-block">
                <div style={{fontSize:20}}>{title}</div>
                <div style={{color:'blue'}}>Rs {price}</div>
                <div style={{color:'blue'}}>Qty : {qty} </div>
                <div className="cart-item-actions">
                    <img alt="increase" 
                    onClick={()=>{props.onIncreaseQuantity(props.product)}} 
                    className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                    <img alt="decrease" 
                    onClick={()=>{props.onDecreaseQuantity(props.product)}}
                    className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                    <img alt="delete" 
                    onClick={()=>{props.onDeleteProduct(props.product.id)}}
                    className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                </div>
            </div>
        </div>
    );
};

const styles={
    image:{
        width:140,
        height:140,
        borderRadius:10,
        background:'#777'
    }
}

export default CartItem;