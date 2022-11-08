import React, {useEffect, useState, useContext} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

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


let EMPTY_FORM = {
  name: "",
  price: 0,
  stock: 0,
  image: "",
  description: ""
}

function App() { 
  let [products, setProducts] = useState([]);
  let[orders, setOrders] = useState([]);
  let [newProduct, setNewProduct] = useState(EMPTY_FORM);

  let navigate = useNavigate();

  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {
    cart: {cartItems},
} = state;

  useEffect(() =>{
    fetch("/products")
      .then(res => res.json())
      .then(json => {setProducts(json);})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      });  
  }, [])

  useEffect(() =>{
    fetch("/orders")
      .then(res => res.json())
      .then(json => {setOrders(json);})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      });  
  }, [])

  function addOrderItems(shippingDetails){
    let address = `${shippingDetails.street}, ${shippingDetails.house_number}, ${shippingDetails.floor === "" ? "" : shippingDetails.floor+", "}${shippingDetails.postal_code}, ${shippingDetails.city}, ${shippingDetails.country}`;
    let p_List = cartItems.map(p=> ({product_id: p.id, quantity:p.quantity}))
    let c_name = `${shippingDetails.firstName} ${shippingDetails.lastName}`
    fetch("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email: shippingDetails.email, address: address, customer_name: c_name, productList: p_List})
      })
      .then((res) => {
        res.json()
        .then((json)=> {
          setOrders(json)
        })})
      .catch(error => {
        console.log(`Server error: ${error.message}`)
      })
      ctxDispatch({type: 'EMPTY_CART'});
      navigate("/orderconfirmation");
}

function addProduct(){
  fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: newProduct.name, price: newProduct.price, stock: newProduct.stock, image: newProduct.image, description: newProduct.description})
    })
    .then((res) => {
      res.json()
      .then((json)=> {
        setProducts(json)
      })})
    .catch(error => {
      console.log(`Server error: ${error.message}`)
    })
}

function changeOrderStatus(id, complete){
  fetch(`/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({processed: complete})
  })
  // Continue fetch request here
  .then((res) => {
    res.json()
    .then((json)=> {
      setOrders(json)
    })})
  .catch(error => {
    console.log(`Server error: ${error.message}`)
  })
}

let contextObj = {
  products,
  setProducts,
  addProduct,
  newProduct,
  setNewProduct, 
  newProduct,
  addOrderItems,
  orders,
  changeOrderStatus
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

        <AdminContext.Provider value={contextObj}>
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
