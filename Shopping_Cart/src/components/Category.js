import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Style.css';
import { Link } from 'react-router-dom';

function Category() {
   


const[category,setCategory]=useState([]);

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then((response)=>{
        console.log(response.data);
        setCategory(response.data);
    });
},[])

return(
    <>

    <div className='navbar'>
    <div className='category'>
       <Link to='/product'><p className='cat'>All</p></Link> 
       <Link to={`/category/${category[0]}`} ><p className='cat'>{category[0]}</p></Link><br></br>
       <Link to={`/category/${category[1]}`} ><p className='cat'>{category[1]}</p></Link><br></br>
       <Link to={`/category/${category[2]}`} ><p className='cat'>{category[2]}</p></Link><br></br>
       <Link to={`/category/${category[3]}`} ><p className='cat'>{category[3]}</p></Link><br></br>
       <Link to='/Sort'><p className='cat'>Filter</p></Link>
    </div>
    <div className='cart'>
    <Link to='/cart' ><p className='cat'>Carts<img src='https://icon-library.com/images/trolley-icon/trolley-icon-8.jpg' alt='#' className='logo2'></img></p></Link>
    </div>
    </div>
    </>
    
    
);

}

export default Category;