import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Style.css';
import { useParams,Link} from 'react-router-dom';
import Category from './Category';

function Data() {
   
const {category}= useParams([]);

const[data,setData]=useState([]);

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then((response)=>{
        console.log(response.data);
        setData(response.data);
    });
},[category])

return(
    <>
    <Category/>
     <div className='page'>
    <div className='products'>
    {
      data && data.length>0 && data.map((products)=>{
        console.log(products);

        return(
          <>
            <div className='product'>
           <div className='cards'>
            
           <Link to={`/product/${products.id}`}>
           <img src={products?.image} alt='image' className='images'></img>
           </Link>
           <p>{products.title}</p>
           <p>Rs : {products.price}</p>
           <p>{products.category}</p>
           <p>{products.id}</p>
           <button className='button'>ADD TO CARD</button>
           </div>
           </div>
          </>
        )
      })
    }
  </div>
  </div>
  </>
  
)

}

export default Data;