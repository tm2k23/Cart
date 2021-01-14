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
    render(){
        return (
            <div className="cart">
                {
                    this.state.products.map((product)=>{
                        return <CartItem product={product} 
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct} 
                        key={product.id}/>
                    })
                }
            </div>
        )
    }
};

export default Cart;