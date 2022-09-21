import './App.css';
import React from 'react';
import SideBar from './Components/SideBar';
// import MainHeader from './Components/Header';
// import ApiRequest from './Components/ApiRequest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Videos from './Components/Video';
import MainPage from './Components/MainPage';
import SearchBar from './Components/SearchBar';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WatchLater from './Components/WatchLater';
import History from './Components/History';
import Like from './Components/Likes';





function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:id' element={<Videos />} />
            <Route path='/search/:searchedValue' element={<SearchBar />} />
            <Route path='/search/:searchedValue/:videoId' element={<Videos />} />
            <Route path='/watchlater' element={<WatchLater/>}/>
            <Route path='/History' element={<History/>}/>
            <Route path='/likes' element={<Like/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}


export default App;
