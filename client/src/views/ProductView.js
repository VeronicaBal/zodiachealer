import {useParams, Link, useNavigate} from "react-router-dom";
import React,{useState, useEffect, useContext} from 'react'
import {Store} from "../Store"

import "./ProductView.css"

function ProductScreen(){
 const [product, setProduct] = useState({});
 const params = useParams();
 const {name} = params;
 const [selectedQuantity, setQuantity] = useState(1);
 let navigate = useNavigate();

 useEffect(() =>{
    fetch(`/products/${name}`)
      .then(res => res.json())
      .then(json => {setProduct(json);})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      });  
  }, [])

const {state, dispatch: cxtDispatch} = useContext(Store);
const {cart} = state
 const addToCartHandler = () => {
    //checking if items are already in cart to avoid duplicates
    const existItem = cart.cartItems.find((x) => x.id === product.id);
    //if the item exist 
    const quantity = existItem ? existItem.quantity + Number(selectedQuantity) : 1;
    cxtDispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity}}) //change quantity depending on input
    navigate(`/cart`)
 } 

const handleChange= (event) => {
setQuantity(event.target.value)
}

 return (
    <div className="product-view">
        <section className="title-container">
            <Link to='/shop'>
                <button>Back</button> 
            </Link>
            <h1>{name}</h1>
        </section>
        <div className="product-container">
            <img 
                className = "product-image"
                key={product.id} 
                src={product.image} 
                alt={product.name} />
            <section>
                    <p className="price">€{product.price} 
                        {product.stock > 0 ? 
                        <label className="label">Quantity
                        <input type="number" min="1" max="10" defaultValue={1} onChange={(e)=> handleChange(e)} ></input> 
                        </label> : 
                        <p>Out of stock</p>
                        }
                    </p>
                <p className="description">{product.description}</p>
                <button onClick={addToCartHandler} disabled={product.stock === 0}>Add to cart</button>
            </section>
           
        </div>
    </div>
    
 )
}

export default ProductScreen