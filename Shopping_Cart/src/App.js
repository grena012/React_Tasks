import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';


function App(){
  return(
    <>
    {/* <Header/> */}
    {/* <Login/> */}
    <Home/>
    </>
  );
}

export default App;
  
