import React from 'react';
class CartItem extends React.Component{
    // define constructor to create state
    constructor(){
        super(); // to call the constructor of base class
        this.state={
            price:999,
            title:"phone",
            qty:1,
            img:""
        }
    }
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
    render(){
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="item"></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:20}}>{title}</div>
                    <div style={{color:'blue'}}>Rs {price}</div>
                    <div style={{color:'blue'}}>Qty : {qty} </div>
                    <div className="cart-item-actions">
                        <img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                    </div>
                </div>
            </div>
        );
    };
};

const styles={
    image:{
        width:100,
        height:100,
        borderRadius:10,
        background:'#777'
    }
}

export default CartItem;