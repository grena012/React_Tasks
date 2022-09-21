import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector,useDispatch } from 'react-redux';
import { deleteVideo } from '../redux/Actions/Actions';
import { removeWatchLater } from '../redux/Actions/Actions';
import {DeleteOutlined,LikeOutlined,CommentOutlined,EyeOutlined} from '@ant-design/icons';
import '../CSS/watchLater.css';

function WatchLater() {
    const state = useSelector((state) => state.Videos);
    const dispatch = useDispatch();
    console.log('getstate',state.list);
    const videolist = state.list;
    
return(
  <>
  <div className='wLater'>
  <p onClick={() =>  dispatch(removeWatchLater(state))}><DeleteOutlined />Remove All Videos</p>
  {
videolist && videolist.length > 0 && videolist.map((video)=>{
  console.log("hello",video)

  const url=video.list.player.embedHtml;
  
   return(
     <>
     <div className='wLater_video'>
     <ReactPlayer url={url}></ReactPlayer>
     <section>{video.list.id}</section>
     <section>{video.list.snippet.title}</section>
     <section><EyeOutlined />{video.list.statistics.viewCount}</section>
     <section><LikeOutlined/>{video.list.statistics.likeCount}</section>
     <section><CommentOutlined />{video.list.statistics.commentCount}</section>
     <section onClick={() =>  dispatch(deleteVideo(video))} ><DeleteOutlined />Remove from WatchLater</section>
     </div>
     </>
   );
})
  }
  </div>
  
  </>
);

}

export default WatchLater;