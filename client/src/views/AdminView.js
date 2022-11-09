import React, {useState} from "react";
import "./AdminView.css"
import AddProduct from "../components/AddProduct";
import Orders from "../components/Orders";
import RemoveProduct from "../components/RemoveProduct";



function AdminView(){
let [view, setView] = useState("add");

function changeView(event){
    setView(event.target.name);
}

    return(
        <div className="admin">
            <h2>Admin view</h2>

            <button name="add" onClick={e=> changeView(e)}>Add Products</button>
            <button name="remove" onClick={e=> changeView(e)}>Edit Products</button>
            <button name="orders" onClick={e=> changeView(e)}>View Orders</button>

            {view === "add"? 
                <AddProduct></AddProduct> 
                : null 
            }

            {view === "remove"? 
                <RemoveProduct></RemoveProduct>
                : null
            }
            
            {view === "orders"?
                <Orders></Orders>
                :null
            }   
            

            
        </div>
    )
}

export default AdminView;