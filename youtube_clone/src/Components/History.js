import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { LikeOutlined, CommentOutlined,LoadingOutlined,DeleteOutlined} from '@ant-design/icons';
import { deleteHistoryVideo } from '../redux/Actions/Actions';
import { clearHistory } from '../redux/Actions/Actions';
import { useDispatch } from 'react-redux';


function History() {
    const state = useSelector((state) => state.History);
    const dispatch = useDispatch();
    console.log('getstate',state.list);
    const videoData=state.list;
    
      
return(
  <>
  <div className='wLater'>
    <p onClick={() =>  dispatch(clearHistory(state))}><DeleteOutlined />Clear History</p>
  {
videoData && videoData.length > 0 && videoData.map((video)=>{
  console.log("hello",video.list)
  const url=video.list.player.embedHtml;
  
   return(
     <>
     <ReactPlayer url={url}></ReactPlayer>
     <section>{video.list.snippet.title}</section>
     <section>{video.list.snippet.channelTitle}</section>
     <section><pre>views:{video.list.statistics.viewCount}
             <LikeOutlined />{video.list.statistics.likeCount}</pre></section><br /><br />
    <section><CommentOutlined />{video.list.statistics.commentCount}</section>
    <section onClick={() =>  dispatch(deleteHistoryVideo(video))}><DeleteOutlined />Remove from History</section>
    
     </>
   );
})
  }
  
  </div>
  </>
);

}

export default History;