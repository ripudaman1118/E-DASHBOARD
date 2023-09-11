import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {

         Axios.get(`http://localhost:4000/product`).then((response) => {
            setProducts(response.data);
        })
    }

    const deleteProduct=(id)=>{
        Axios.delete(`http://localhost:4000/product/${id}`)  
        .then(res => {
        getProducts();
        })  
    }

    const searchItem=(event)=>{
        let key=event.target.value;
       
             Axios.get(`http://localhost:4000/search`)
             .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
         
        
    }

    return (
        <div className="ProductList">
            <h2>Product List</h2>
            <input className="search" type="text" placeholder="Search" onClick={searchItem} />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Opration</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li><button className="deletebtn" onClick={()=>deleteProduct(item._id)}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link>
                        </li>
                    </ul>
                )
            }

        </div>


    )
}
export default ProductList;