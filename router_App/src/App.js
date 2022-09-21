import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Admin from './Admin';
import Home from './Home';
import './App.css';

function App() {
  return(<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path='/Admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
