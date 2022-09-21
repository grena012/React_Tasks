import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeLike } from '../redux/Actions/Actions';
import { removeLikeVideos } from '../redux/Actions/Actions';
import {DeleteOutlined} from '@ant-design/icons';
import '../CSS/watchLater.css';

function Like() {
    const state = useSelector((state) => state.Like);
    const dispatch = useDispatch();
    console.log('LikesVideos',state.list);
    const videolist = state.list;
    
    
return(
  <>
  <div className='wLater'>
    <h2 onClick={() => dispatch(removeLikeVideos(state))}><DeleteOutlined />Remove All</h2>
  {
videolist && videolist.length > 0 && videolist.map((video)=>{
  console.log("Like",video)

  const url=video.list.player.embedHtml;
  
   return(
     <>
     <div className='wLater_video'>
     <ReactPlayer url={url}></ReactPlayer>
     <section>{video.list.id}</section>
     <section>{video.list.snippet.title}</section>
     <section onClick={() =>  dispatch(removeLike(video))} ><DeleteOutlined />Remove like</section>
     </div>
     </>
   );
})
  }
  </div>
  </>
);

}

export default Like;