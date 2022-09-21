import React from 'react';
import {MenuOutlined,SearchOutlined,VideoCameraOutlined,AppstoreOutlined,UserOutlined,BellOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import '../CSS/Header.css';
import {useEffect,useState} from 'react';

function MainHeader() {
  const [search,setSearch]= useState("");
  console.log(search)
  return (
    <>
    <div className='header'>
        <div className='Header-left'>
            <MenuOutlined />
        
              <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''
              />
    
          </div>
          
          <div className="header__center">
            <input type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
           <Link to={`/search/${search}`}><SearchOutlined  className='header__searchbutton'/></Link>
          </div>
            
          <div className="header__right">
            <VideoCameraOutlined  className='header__icon'/>
            <AppstoreOutlined  className='header__icon'/>
            <BellOutlined   className='header__icon'/>
            <UserOutlined 
              alt='user'
              // stc='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
            />
        </div>

    </div>
    </>
  )
}

export default MainHeader;