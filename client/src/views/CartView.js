import React, {useContext} from "react";
import {Store} from '../Store';
import {Link} from 'react-router-dom'

import "./CartView.css"

function CartView(){
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } =  state;
   
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cart-grid">
                {cartItems.length === 0 ? (
                    <p>Cart is empty.</p>
                ) :
                <separate>
                    {cartItems.map((item) => (
                        <separate key={item.id}>
                            <img src={item.image}
                            alt={item.name}/>
                            <Link to={`product/${item.name}`}>{item.name}</Link>
                            <button>-</button>
                            {item.quantity}
                            <button>+</button>
                            <p>{item.price}</p>
                            <button>delete</button>
                        </separate>
                    ) )}
                </separate>
                }

            </div>
        </div>
    )
}

export default CartView