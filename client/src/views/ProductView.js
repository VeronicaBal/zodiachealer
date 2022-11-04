import {useParams} from "react-router-dom";
import React,{useState, useEffect} from 'react'

import "./ProductView.css"

function ProductScreen(){
 const [product, setProduct] = useState({});
 const params = useParams();
 const {name} = params;

 useEffect(() =>{
    fetch(`/products/${name}`)
      .then(res => res.json())
      .then(json => {setProduct(json[0]);})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      });  
  }, [])

 return (
    <div className="product-view">
        <h1>{name}</h1>
        <div className="product-container">
            <img 
                className = "product-image"
                key={product.id} 
                src={product.image} 
                alt={product.name} />
            <section>
                    <p className="price">€{product.price} 
                        <label className="label">Quantity
                        <input type="number" min="1" max="10" defaultValue={1}></input> 
                        </label>
                    </p>
                <p className="description">{product.description}</p>
                <button>Add to cart</button>
            </section>
        </div>
    </div>
    
 )
}

export default ProductScreen