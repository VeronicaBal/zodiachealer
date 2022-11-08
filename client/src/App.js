import React, {useEffect, useState, useContext} from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';

import HomeView from "./views/HomeView";
import SignView from './views/SignView';
import AffirmationView from './views/AffirmationView';
import MashupView from './views/MashupView';
import NavBar from "./components/NavBar";
import ShopView from "./views/ShopView";
import ProductView from "./views/ProductView";
import CartView from "./views/CartView";
import ShippingView from "./views/ShippingView";
import OrderConfirmationView from "./views/OrderConfirmationView";
import AdminView from "./views/AdminView";
import {Store} from "./Store"
import AdminContext from "./Context/AdminContext";



function App() { 
  let [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch("/products")
      .then(res => res.json())
      .then(json => {setProducts(json);})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      });  
  }, [])

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {
    cart: {cartItems},
} = state;



 
let obj = {
  products,
  setProducts
}

  return (
    
      <div className="App">
      <header className="App-header">
        <NavBar />
        <img src="https://pbs.twimg.com/profile_images/1394800170290843649/eSMhUxwe_400x400.jpg" className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <p>- THE ZODIAC HEALER -</p>
        <br/>

        <AdminContext.Provider value={obj}>
        <Routes>
          < Route path="/" element={<HomeView />} />
          < Route path="/sign" element={<SignView />} />
          < Route path="/affirmations" element={<AffirmationView />} />
          < Route path="/mashup" element={<MashupView />} />
          < Route path="/product/:name" element={<ProductView />} />
          < Route path="/orderconfirmation" element={<OrderConfirmationView />} />
          < Route path="/shop" element={<ShopView />} />
          < Route path="/shipping" element={<ShippingView />} />
          < Route path="/admin" element={<AdminView />} />
          < Route path="/cart" element={<CartView />} />
          </Routes>
        </AdminContext.Provider>

      </header>
    </div>
  );
}


export default App;
