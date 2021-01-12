import React from 'react';
class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="item"></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:20}}>Phone</div>
                    <div style={{color:'blue'}}>Rs 999</div>
                    <div style={{color:'blue'}}>Qty : 1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
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