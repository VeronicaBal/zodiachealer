import React, {useContext} from "react";
import AdminContext from "../Context/AdminContext";
import "./RemoveProducts.css"

function RemoveProduct(){
    const {products, removeProduct} = useContext(AdminContext)

    function handleClick(event){
        let id= event.target.name;
        console.log(id)
        removeProduct(event.target.name)
    }

    return(
        
            <div className="removeProds">
                <h3>Edit Products</h3>
                <div className= "tablecontainer">
                <table className="table">
                    <tbody className="tableContent">
                    <tr>
                            <th>Delete</th>
                            <th>Save Changes</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Image</th>
                            <th>Description</th>
                    </tr>
                        {products.map(p => (
                            <tr key={p.id}>
                                    <td><button name={p.id} onClick={e => handleClick(e)}>X</button></td>
                                    <td><button>save</button></td>
                                    <td><input className="input" type="text" defaultValue={p.name}/></td>
                                    <td><input className="input" type="number" defaultValue={p.price}/></td>
                                    <td><input className="input" type="number" defaultValue={p.stock}/></td>
                                    <td><input className="input" type="url" defaultValue={p.image}/></td>
                                    <td><textarea className="input" type="textArea" defaultValue={p.description}></textarea></td>
                            </tr>
                        ))} 
                     </tbody>
                </table>
                </div>
            </div>
    )
}

export default RemoveProduct;