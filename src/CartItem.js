import React from 'react';
class CartItem extends React.Component{
    // define constructor to create state
    
    increaseQuantity = () => {
        // have used arrow function to bind the object 
        // try it without arrow function, we will get "this" as undefined
        // console.log(this);

        // this.state.qty+=1; this will not work, because react will not render the change since it does not know that state is updated

        // we can change the state in 2 ways 

        // setState() 1st Form
        // this.setState({ // this form is used if we do not require previous state
        //     qty:this.state.qty + 1 
        // })

        // setState 2nd form
        this.setState((prevState)=>{// this form is used if we require previous state
            return {
                qty:prevState.qty+1
            }
        })
    }
    decreaseQuantity = () => {
        if(this.state.qty===0){return} // return if the quantity is zero
        this.setState((prevState)=>{// this form is used if we require previous state
            return {
                qty:prevState.qty-1
            }
        })
    }
    render(){
        const {title,price,qty}=this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} ></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:20}}>{title}</div>
                    <div style={{color:'blue'}}>Rs {price}</div>
                    <div style={{color:'blue'}}>Qty : {qty} </div>
                    <div className="cart-item-actions">
                        <img alt="increase" 
                        onClick={()=>{this.props.onIncreaseQuantity(this.props.product)}} 
                        className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                        <img alt="decrease" 
                        onClick={()=>{this.props.onDecreaseQuantity(this.props.product)}}
                        className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                        <img alt="delete" 
                        onClick={()=>{this.props.onDeleteProduct(this.props.product.id)}}
                        className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                    </div>
                </div>
            </div>
        );
    };
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