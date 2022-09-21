import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Style.css';
import Category from './Category';
import {Link,useParams} from "react-router-dom";


function Sort() {
   
    const [apidata,setApidata]=useState([]);
    const [cart,setCart]=useState([]);   


    useEffect(()=>{
      
      axios.get("https://fakestoreapi.com/products?sort=desc")
      .then((response)=>{
        console.log(response.data);
        setApidata(response.data);
      })
    },[])

    const handleclick = (products)=>{
      if(cart.indexOf(products)!==-1)
      return alert("Product is already added to cart");
      cart.push(products);
      console.log(cart);
    }

    return(
        <>
         <Category/>
         <div className='page'>
      
               <div className='products'>
        {
          apidata && apidata.length>0 && apidata.map((products)=>{
            console.log(products);

            return(
              <>
                <div className='product'>
               <div className='cards'>
                
               <Link to={`/product/${products.id}`}>
                <img src={products?.image} alt='image' className='images'></img></Link>
               <p>{products.category}</p>
               <p>Rs : {products.price}</p>
               <button className='button' onClick={()=>handleclick(products)} handleclick={handleclick}>ADD TO CART</button>
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

export default Sort;