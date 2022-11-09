import React, {useContext} from "react";
import AdminContext from "../Context/AdminContext";
import "./Orders.css"

function Orders(){
    
    const {orders} = useContext(AdminContext)


    function handleClick(id, event){
        let complete = event.target.checked;
        complete = (complete ? 1 : 0);
        //changeOrderStatus(id, complete)
    }

    return(
        <div>
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

export default Orders;