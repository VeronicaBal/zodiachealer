import React, {useState, useContext} from "react";
import {Store} from '../Store';
import "./ShippingView.css"

let EMPTY_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    house_number: "",
    floor: "",
    postal_code: "",
    city: "",
    country: ""
}

function ShippingView(){
let[shippingDetails, setShippingDetails] = useState(EMPTY_FORM);
let[orders, setOrders] = useState([]);


const {state, dispatch: ctxDispatch} = useContext(Store);
const {
    cart: {cartItems},
} =  state;

function handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    setShippingDetails(state => ({
        ...state,
        [name]: value
      }));
}

function handleSubmit(event){
    event.preventDefault();
    addOrderItems();
    setShippingDetails(EMPTY_FORM);
}

function addOrderItems(){
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
}



    return (
        <div className="shipping-view">
            <h2>Shipping Details</h2>
            <form onSubmit={e=> handleSubmit(e)} className="container">
                <div className="user-form">
                    <label> First Name
                        <div>
                            <input onChange={e => handleChange(e)} name="firstName" key="firstName" required type="text"/>
                        </div>
                    </label>
                    <label> Last Name
                        <div>
                            <input onChange={e => handleChange(e)} name="lastName" key="lastName" required type="text"/>
                        </div>
                    </label>
                    <label> Email
                        <div>
                            <input onChange={e => handleChange(e)} name="email" key="email" required type="email"/>
                        </div>
                    </label>
                </div>
                
                <h3>Address</h3>
                <div className="address-form">
                    <label> Street
                        <div>
                            <input onChange={e => handleChange(e)} name="street" key="street" required type="text"/>
                        </div>
                    </label>
                    <label> House number
                        <div>
                             <input onChange={e => handleChange(e)} name="house_number" key="house_number" required type="text"/>
                        </div>

                    </label>
                    <label> Floor / Apartment
                        <div>
                            <input onChange={e => handleChange(e)} name="floor" key="floor" type="text" placeholder="optional"/>
                        </div>
                    </label>
                    <label> Postal Code
                        <div>
                             <input onChange={e => handleChange(e)} name="postal_code" key="postal_code" required type="number"/>
                        </div>

                    </label>
                    <label> City
                         <div>
                            <input onChange={e => handleChange(e)} name="city" key="city" required type="text"/>
                        </div>

                    </label>
                    <label> Country
                        <div>
                            <input onChange={e => handleChange(e)} name="country" key="country" required type="text"/>
                        </div>

                    </label>
                </div>
                <div>
                    <button type="submit">Confirm Order</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingView;