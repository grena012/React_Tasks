import React from 'react';
import MainHeader from './Header';
import SideBar from './SideBar';
import ApiRequest from './ApiRequest';
import { useSelector } from 'react-redux';

function MainPage() {

  const state = useSelector((state) => state.Video);
  console.log('state',state);
  return (
      <>
      <MainHeader />  
      <div className='mainPage'>
      <div className='left'><SideBar/></div>
      <div className='right'><ApiRequest/></div>
      </div> 
      </>
  );
}

export default MainPage;