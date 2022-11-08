import React, {useEffect, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminContext from "../Context/AdminContext";
import axios from "axios";
import "./ShopView.css";
import {Store} from "../Store.js"


function ShopView(props){
    let navigate = useNavigate();
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {
      cart: {cartItems},
  } = state;

  const {products} = useContext(AdminContext)
    

      const addToCartCartHandler = async (item) => {
        //checking if items are already in cart to avoid duplicates
        const existItem = cartItems.find((x) => x.id === item.id);
        //if the item exist 
        const quantity = existItem ? existItem.quantity +1 : 1;
        const {data} = await axios.get(`products/${item.name}`);
        ctxDispatch({type: 'CART_ADD_ITEM', payload: {...item, quantity}}) //change quantity depending on input
        navigate("/cart")
    }

    return(
        <div className = "shop-view">
            <section>
                {products && products.map((p) => (
                    <div key={p.id} className = "image_container">
                        <Link to={`/product/${p.name}`}>
                            <img 
                            className = "product-image"
                            key={p.id} 
                            src={p.image} 
                            alt={p.name}/>  
                        </Link>
                        <p>€{p.price}</p>
                        <Link className="product-name" to={`/product/${p.name}`}>
                            {p.name}
                        </Link>
                        {p.stock === 0?
                        <button disabled>Out of stock</button>
                        :
                        <button onClick={() => addToCartCartHandler(p)}>Add to cart</button>
                        }
                    </div>
                ))
                }
            </section>
           
        </div>
    )
}


export default ShopView;