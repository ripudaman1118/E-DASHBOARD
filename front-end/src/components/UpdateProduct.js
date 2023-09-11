import React, { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate=useNavigate();
   
       
    let id=params._id;
    
    useEffect(() => {
         Axios.get(`http://localhost:4000/product/${id}`).then((response) => {
            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setCompany(response.data.company);
        }).catch((error) => {
            console.log(error);
        })
     
    }, []);



    const updateProduct = async () => {
        Axios.put(`http://localhost:4000/product/${id}`, {
            name:name,
            price:price,
            category:category,
            company:company
        })
            .then(response => navigate("/"))
            .catch(error => console.error(error));
    }



    return (
        <div className="product">
            <h1>Update Product</h1>
            <input className="inputbox" type="text" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)} />

            <input className="inputbox" type="text" placeholder="Enter Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />

            <input className="inputbox" type="text" placeholder="Enter Product Category" value={category} onChange={(e) => setCategory(e.target.value)} />

            <input className="inputbox" type="text" placeholder="Enter Product Company" value={company} onChange={(e) => setCompany(e.target.value)} />

            <button onClick={updateProduct} className="buttonbox" type="button">Update Product</button>
        </div>
    )
}


export default UpdateProduct;