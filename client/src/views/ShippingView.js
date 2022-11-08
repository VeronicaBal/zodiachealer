import React, {useState, useContext} from "react";
import {Store} from '../Store';
import {useNavigate} from 'react-router-dom';
import AdminContext from "../Context/AdminContext";

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
const navigate = useNavigate();



const {state, dispatch: ctxDispatch} = useContext(Store);
const {
    cart: {cartItems},
} =  state;

const {addOrderItems} = useContext(AdminContext)


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
    addOrderItems(shippingDetails);
    setShippingDetails(EMPTY_FORM);
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