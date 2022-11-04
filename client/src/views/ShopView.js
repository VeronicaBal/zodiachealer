import React, {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./ShopView.css";


function ShopView(props){
    let [products, setProducts] = useState([]);


    useEffect(() =>{
        fetch("/products")
          .then(res => res.json())
          .then(json => {setProducts(json);})
          .catch(error => {
            console.log(`Server error: ${error.message}`)
          });  
      }, [])


    return(
        <div className = "shop-view">
            <section>
                {products && products.map((p) => (
                    <div className = "image_container">
                        <Link to={`/product/${p.name}`}>
                            <img 
                            className = "product-image"
                            key={p.id} 
                            src={p.image} 
                            alt={p.name}/>  
                        </Link>
                        <p>€{p.price}</p>
                        <p>{p.name}</p>
                        <button>Add to cart</button>
                    </div>
                ))
                }
            </section>
        </div>
    )
}


export default ShopView;