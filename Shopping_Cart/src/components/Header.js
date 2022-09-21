import React from 'react';
import '../CSS/Style.css';
import {Link,useParams} from "react-router-dom";


function Header(){
    return(
        <>
        <div className='Header'>
        <h2 className='Heading'>Flipkart Lite <img src='https://cdn4.vectorstock.com/i/thumb-large/94/33/retail-cart-vector-349433.jpg' alt='#' className='logo'></img></h2>
        </div>
        </>
    );
    }
export default Header;
