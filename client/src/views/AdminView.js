import React from "react";
import "./AdminView.css"

function AdminView(){
    return(
        <div>
            <h2>Admin view</h2>
            <form className="add-product">
                <h3>Add a product</h3>
                    <div className="grid">
                        <label>Name
                            <input name="name" type="text"/>
                        </label>
                        <label>Price
                            <input name="price" type="number" step="0.01" min="0.00"/>
                        </label>
                        <label>Stock
                            <input name="stock" type="number"/>
                        </label>
                        <label>Image
                            <input name="image" type="file"/>
                        </label>
                        <div >
                            <label className="description">Description
                                <textarea name="description"/>
                            </label>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default AdminView;