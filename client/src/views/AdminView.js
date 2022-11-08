import React, {useState, useContext} from "react";
import "./AdminView.css"
import AdminContext from "../Context/AdminContext";



let EMPTY_FORM = {
    name: "",
    price: 0,
    stock: 0,
    image: "",
    description: ""
  }

function AdminView(){

    const {addProduct, setNewProduct, newProduct, orders, changeOrderStatus} = useContext(AdminContext)


    function handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        setNewProduct(state => ({
            ...state,
            [name]: value
          }));
    }

    function handleSubmit(event){
        event.preventDefault();
        addProduct();
        setNewProduct(EMPTY_FORM);
    }


    function handleClick(id, event){
        let complete = event.target.checked;
        complete = (complete ? 1 : 0);
        console.log(complete);
        console.log(id);
        changeOrderStatus(id, complete)
    }

    return(
        <div>
            <h2>Admin view</h2>
            <form className="add-product" onSubmit={(e)=>handleSubmit(e)}>
                <h3>Add a product</h3>
                    <div className="grid">
                        <label>Name
                            <input name="name" required type="text" onChange={e => handleChange(e)}/>
                        </label>
                        <label>Price
                            <input name="price" required type="number" step="0.01" min="0.00" onChange={e => handleChange(e)}/>
                        </label>
                        <label>Stock
                            <input name="stock" required type="number" onChange={e => handleChange(e)}/>
                        </label>
                        <label>Image
                            <input  required name="image"  type="url" onChange={e => handleChange(e)}/>
                        </label>
                        <div >
                            <label className="description">Description
                                <textarea name="description" required onChange={e => handleChange(e)}/>
                            </label>
                        </div>
                    <button type="submit">AddProduct</button>
                    </div>
            </form>

            <div className="removeProds">
                <h3>Remove Products</h3>

            </div>

            <div className="orders">
            <h3>Orders</h3>
                <div className= "tablecontainer">
                <table className="table">
                    <tbody className="tableContent">
                        <tr>
                            <th>ID</th>
                            <th>Processed</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Products</th>
                        </tr>
                        {orders.map(o=>(
                        <tr key={o.id}>
                            <td>{o.id}</td>
                            <td><input type="checkbox" defaultChecked={o.processed} onClick={(e) => handleClick(o.id, e)}/></td>
                            <td>{o.customer_name}</td>
                            <td>{new Date(o.date).toLocaleString()}</td>
                            <td>{o.email}</td>
                            <td>{o.address}</td>
                            <td>{o.products.map(p => (
                                <div key={p.id}>{p.name} <br/> x{p.quantity}</div>))}
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>


        </div>
    )
}

export default AdminView;