import React, {useState} from "react";
import "./AdminView.css"

let EMPTY_FORM = {
    name: "",
    price: 0,
    stock: 0,
    image: "",
    description: ""
}

function AdminView(){
    let [newProduct, setNewProduct] = useState(EMPTY_FORM);

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

    //change position of this function/of setProducts
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
              //setProducts(json)
            })})
          .catch(error => {
            console.log(`Server error: ${error.message}`)
          })
    }



    return(
        <div>
            <h2>Admin view</h2>
            <form className="add-product" onSubmit={(e)=>handleSubmit(e)}>
                <h3>Add a product</h3>
                    <div className="grid">
                        <label>Name
                            <input name="name" type="text" onChange={e => handleChange(e)}/>
                        </label>
                        <label>Price
                            <input name="price" type="number" step="0.01" min="0.00" onChange={e => handleChange(e)}/>
                        </label>
                        <label>Stock
                            <input name="stock" type="number" onChange={e => handleChange(e)}/>
                        </label>
                        <label>Image
                            <input name="image" type="file" onChange={e => handleChange(e)}/>
                        </label>
                        <div >
                            <label className="description">Description
                                <textarea name="description" onChange={e => handleChange(e)}/>
                            </label>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default AdminView;