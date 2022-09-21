import React from 'react';
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import Api from './Shopping';
import Details from './Details';
import Header from './Header';
// import Category from './Category';
import Data from './Data';
import Login from './Login';
import Cart from './Cart';
import Error from './Error';
import Sort from './Sort';


function Home(){
  return(
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/product' element={<Api/>}/>
    <Route path='/product/:id' element={<Details/>}/>
    <Route path='/category/:category' element={<Data/>}/>
    <Route path='/Sort' element={<Sort/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default Home;