import React, { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const navigate=useNavigate();
    const[error,setError]=React.useState(false);
    const addProduct = async () => {
        console.log(!name);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        try {
            let result = Axios.post('http://localhost:4000/add-product', {
                name: name,
                price: price,
                category: category,
                company: company

            }).then(response => navigate("/"));
            // console.log(JSON.stringify(await result));
            localStorage.setItem("product", JSON.stringify(await result));
            
        } catch (error) {
            console.error("Error:", error);
        }

    }



    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputbox" type="text" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)} />
            {error && !name &&<span className="invaild-input">Enter valid name</span>}
            <input className="inputbox" type="text" placeholder="Enter Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            {error && !price &&<span className="invaild-input">Enter valid price</span>}
            <input className="inputbox" type="text" placeholder="Enter Product Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            {error && !category &&<span className="invaild-input">Enter valid Category</span>}
            <input className="inputbox" type="text" placeholder="Enter Product Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            {error && !company &&<span className="invaild-input">Enter valid Company</span>}
            <button onClick={addProduct} className="buttonbox" type="button">Add Product</button>
        </div>
    )
}


export default AddProduct;