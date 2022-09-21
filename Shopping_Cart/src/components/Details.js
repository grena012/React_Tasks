import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Style.css';
import {Link, useParams } from 'react-router-dom';
import Category from './Category';

function Details() {
   
const {id}= useParams();

const[product,setProduct]=useState([]);

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{
        console.log(response.data);
        setProduct(response.data);
    });
},[])

return(
    <>
    
    {
        <div className='body'>
    <div className='product_detail'>
        
        <div className='left'><img src={product.image} alt='#' className='image'></img></div>
        <div className='right'>
        <p><b>Price:</b>{product.price}</p>
         <p> {product.title}</p>
         <p> <b>Category :</b>{product.category}</p>
         <p><b> Product id: </b>{product.id}</p>
         <p><b>Description :</b>{product.description}</p>
         {/* <p> {product.rating.rate}</p> */}
         </div>
    </div>
    </div>
}
    </>
)

}

export default Details;