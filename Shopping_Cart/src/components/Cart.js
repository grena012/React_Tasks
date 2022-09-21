import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Style.css';
import {Link, useParams } from 'react-router-dom';

function Cart() {
   
const {id}= useParams();

const[product,setProduct]=useState([]);

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/1`)
    .then((response)=>{
        console.log(response.data);
        setProduct(response.data);
    });
},[])

return(
    <>
    <p>{product.id}</p>
    <img src={product.image} alt="image" className='image'></img>
    <p>{product.title}</p>
    <p>{product.category}</p>
    <p>{product.description}</p>
    </>
  
)

}

export default Cart;