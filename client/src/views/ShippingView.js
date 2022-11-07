import React, {useState} from "react";

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
}


    return (
        <div>
            <h2>Shipping Details</h2>
            <form onSubmit={e=> handleSubmit(e)}>
                <label> First Name
                    <input onChange={e => handleChange(e)} name="firstName" key="firstName" required type="text"/>
                </label>
                <label> Last Name
                    <input onChange={e => handleChange(e)} name="lastName" key="lastName" required type="text"/>
                </label>
                <label> Email
                    <input onChange={e => handleChange(e)} name="email" key="email" required type="email"/>
                </label>
                <h3>Address</h3>
                <label> Street
                    <input onChange={e => handleChange(e)} name="street" key="street" required type="text"/>
                </label>
                <label> House number
                    <input onChange={e => handleChange(e)} name="house_number" key="house_number" required type="text"/>
                </label>
                <label> Floor / Apartment
                    <input onChange={e => handleChange(e)} name="floor" key="floor" type="text" placeholder="optional"/>
                </label>
                <label> Postal Code
                    <input onChange={e => handleChange(e)} name="postal_code" key="postal_code" required type="number"/>
                </label>
                <label> City
                    <input onChange={e => handleChange(e)} name="city" key="city" required type="text"/>
                </label>
                <label> Country
                    <input onChange={e => handleChange(e)} name="country" key="country" required type="text"/>
                </label>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingView;