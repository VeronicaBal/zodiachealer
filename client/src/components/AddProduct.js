import React,{useContext} from "react";
import AdminContext from "../Context/AdminContext";


let EMPTY_FORM = {
    name: "",
    price: 0,
    stock: 0,
    image: "",
    description: ""
  }

function AddProduct(){
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
        </div>
    )
}

export default AddProduct;