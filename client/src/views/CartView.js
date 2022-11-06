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
        navigate('/signin?redirect=/shipping');
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cart-grid">
                {cartItems.length === 0 ? (
                    <p>Cart is empty.</p>
                ) :
                <separate> 
                    {cartItems.map((item) => (
                        <separate classList ="product-list"key={item.id}>
                            <img src={item.image}
                            alt={item.name}/>
                            <Link to={`product/${item.name}`} className="name">{item.name}</Link>
                            <button disabled={item.quantity === 1} 
                            onClick={()=> updateCartHandler(item, item.quantity-1)}>-</button>
                            {item.quantity}
                            <button disabled={item.quantity === item.stock} 
                            onClick={()=> updateCartHandler(item, item.quantity+1)}>+</button>
                            <p className="price">{item.price}</p>
                            <button onClick={()=> removeItemHandler(item)}>delete</button>
                        </separate>
                    ) )}
                </separate>
                }
                <separate className="checkout-container">
                    <h3>
                        Subtotal ({cartItems.reduce((a,c) => a + c.quantity, 0)}
                        {' '}items) : €
                        {cartItems.reduce((a,c) => a+c.price*c.quantity, 0)}
                    </h3>
                    <button className="checkout" disabled={cartItems.length === 0} onClick={checkoutHandler}>Proceed to Checkout</button>
                </separate>
            </div>
        </div>
    )
}

export default CartView