import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartView from "../views/CartView";
import "./NavBar.css";
import {Store} from '../Store';

export default function NavBar() {
    const {state} = useContext(Store);
    const {cart} = state;
    return (
        <nav className="navigation_links">
            <Link to="/">HOME</Link>
            <br />
            <Link to="/affirmations">AFFIRMATIONS</Link>
            <br/>
            <Link to="/sign">HOROSCOPE</Link>
            <br/>
            <Link to="/mashup">ART</Link>
            <br/>
            <Link to="/shop">SHOP</Link>
            <br/>
            <Link to="/cart"><img className="trolley-icon" src="bag-white.png"/>
                {cart.cartItems.length > 0 && (
                <span className="badge">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                )}
            </Link>
            </nav>
    );
}

