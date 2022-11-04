import {useParams, Link} from "react-router-dom";
import React,{useState, useEffect} from 'react'

import "./ProductView.css"

function ProductScreen(){
 const [product, setProduct] = useState({});
 const params = useParams();
 const [stock, setStock] = useState(-1);
 const {name} = params;

 useEffect(() =>{
    fetch(`/products/${name}`)
      .then(res => res.json())
      .then(json => {setStock(json.stock); setProduct(json);})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      });  
  }, [])

 return (
    <div className="product-view">
        <section classList="title-container">
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
                        {stock > 0 ? 
                        <label className="label">Quantity
                        <input type="number" min="1" max="10" defaultValue={1}></input> 
                        </label> : 
                        <p>Out of stock</p>
                        }
                    </p>
                <p className="description">{product.description}</p>
                <button disabled={product.stock = 0}>Add to cart</button>
            </section>
        </div>
    </div>
    
 )
}

export default ProductScreen