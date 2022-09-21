import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams } from 'react-router-dom';
import {CommentOutlined,LikeOutlined,DislikeOutlined,FieldTimeOutlined,DownloadOutlined} from '@ant-design/icons';
import ReactPlayer from 'react-player';
import ApiRequest from './ApiRequest';
import {DateTime} from 'luxon';
import '../CSS/videos.css';
import { useDispatch } from "react-redux";
import { addVideo } from '../redux/Actions/Actions';
import { likeVideo } from '../redux/Actions/Actions';
// import YouTube from 'react-youtube';


function Videos() {
   
const {id}= useParams();

    const [apidata,setApidata]=useState([]);
    const dispatch = useDispatch();
    const [disabled,setDisabled]=useState(false);
    

  useEffect(() => {
      axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&id=${id}&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
        .then(response => {
          console.log(response.data.items);
          setApidata(response.data.items);
         
          
          
        })
        .catch(error => {
          console.log(error);
        })
      }, [])


      const handleClick = () => {
        dispatch(
          addVideo(apidata[0]),
          setDisabled(true)
          
        )
      };
      const handleLike = () => {
        dispatch(
          likeVideo(apidata[0]),
        )
      };

      // console.log('apidata',apidata[0]);
      return(
          <>
  {
   apidata && apidata.length>0 && apidata.map((videos)=>{
     console.log("gg",videos);
     const url=videos.player.embedHtml;
     const snippet= videos.snippet;
     const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

    
  
    
     return(
       <>
  
  
         <div className='pade2'>
         <div className="videos">
         <div className='videocards'>
           <ReactPlayer url={url} width={1200} height={700}/>
           <section>{snippet.title}</section>
           <section>{snippet.channelTitle}</section>
           <div className='VFooter'>
           <div className='space'>
               <h4>views:{videos.statistics.viewCount}</h4>
               {/* <h4>Likes:{videos.statistics.likeCount}</h4> */}
           </div>
           <div className='vfooter'>
            <h4 onClick={handleLike}><LikeOutlined/>{videos.statistics.likeCount}</h4>
            <h4><DislikeOutlined/>Dislike</h4>
            
            <button onClick={handleClick} disabled={disabled} ><FieldTimeOutlined/>Watch Later</button>

            <h4><DownloadOutlined/>Download</h4>
            {/* <YouTube id={videos.id}></YouTube> */}
         </div>
         </div>
         </div>
         <div><ApiRequest/></div>
         </div>
         </div>
       </>
     )
   })
  }  
          
          
          
          </>
      );
}

export default Videos;