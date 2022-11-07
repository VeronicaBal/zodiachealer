import React, {useContext} from "react";
import {Store} from '../Store';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import "./CartView.css"

function CartView(){
    const navigate = useNavigate();
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } =  state;

    const updateCartHandler = async (item, quantity) => {
        const {data} = await axios.get(`products/${item.name}`);
        ctxDispatch({type: 'CART_ADD_ITEM', payload: {...item, quantity}}) //change quantity depending on input
    }

    const removeItemHandler = (item) => {
        ctxDispatch({type: 'CART_REMOVE_ITEM', payload: item});
    }
   
    const checkoutHandler = () => {
        addOrderItems();
        navigate('/shipping');
    };

    const addOrderItems= () => {
    for (let item in cartItems){
    fetch("/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({quantity: item.quantity, product_id: item.product_id, order_id: 5})
      })
      // Continue fetch request here
      .then((res) => {
        res.json()
        .then((json)=> {
         // props.setIndicators(json)
        })})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      })
    }
}

    return (
        <div className="cart-view">
            <h1>Shopping Cart</h1>
            <div className="cart-grid">
                {cartItems.length === 0 ? (
                    <p>Cart is empty.</p>
                ) :
                <separate className="product-list"> 
                    {cartItems.map((item) => (
                        <separate className="product" key={item.id}>
                            <img src={item.image}
                            alt={item.name}/>
                            <Link to={`product/${item.name}`} className="name">{item.name}</Link>
                            <button disabled={item.quantity === 1} className="minus" 
                            onClick={()=> updateCartHandler(item, item.quantity-1)}>-</button>
                            {item.quantity}
                            <button disabled={item.quantity === item.stock} className="plus" 
                            onClick={()=> updateCartHandler(item, item.quantity+1)}>+</button>
                            <p className="price">€{(item.price*item.quantity).toFixed(2)}</p>
                            <button className="delete" onClick={()=> removeItemHandler(item)}><img src="bin-icon.png" alt="delete"/></button>
                        </separate>
                    ) )}
                </separate>
                }
                <separate className="checkout-container">
                    <h3>
                        Subtotal ({cartItems.reduce((a,c) => a + c.quantity, 0)}
                        {' '}items) : €
                        {cartItems.reduce((a,c) => a+c.price*c.quantity, 0).toFixed(2)}
                    </h3>
                    <button className="checkout" disabled={cartItems.length === 0} onClick={checkoutHandler}>Proceed to Checkout</button>
                </separate>
            </div>
        </div>
    )
}

export default CartView