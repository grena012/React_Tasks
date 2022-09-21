import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DateTime } from 'luxon';
import { useParams } from "react-router-dom";
import { LikeOutlined, CommentOutlined,LoadingOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {historyVideo} from '../redux/Actions/Actions';

import '../CSS/apiRequest.css';



function ApiRequest() {
  const {id}= useParams();
  
  const dispatch = useDispatch();
  const [state, setState] = useState({
    apiData: [],
    isLoading: false,
    // apidata:[],
  });

  const { apiData , isLoading } = state;



  // const [apidata, setApidata] = useState([]);
  

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16&regionCode=in&part=player&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
      .then(response => {
        // console.log(response.data.items);
        if (response.data) {
          setState({
            ...state,
            isLoading: false,
            apiData : response?.data?.items
          })
        }
      })
      .catch(error => {
        console.log(error);
        setState({
          ...state,
          isLoading: false,
        });
      })
  }, [])

  const handleClick = (videos) => {
    dispatch(

      historyVideo(videos),
      
      // setApidata(apidata)
    )
    console.log("videos",videos)
  };

    if(isLoading){
    return <LoadingOutlined />
  };
  
  return (
    <>
      {
        apiData && apiData?.length > 0 && apiData?.map((videos) => {
          // console.log(videos);
          const snippet = videos.snippet;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

          return (
            <>
              <div className="videos">
                <div className='videocards'>
                  <Link to={`/${videos.id}`}>
                    <img src={snippet.thumbnails.medium.url} alt="#" onClick={() => handleClick(videos)}></img>
                  </Link>
                  {/* <section>{snippet.title}</section> */}
                  <section>{snippet.channelTitle}</section>
                  {/* <p>{snippet.channelId}</p> */}
                  <section>{timestamp}</section>
                  <section><pre>views:{videos.statistics.viewCount}
                    <LikeOutlined />{videos.statistics.likeCount}</pre></section><br /><br />
                  <section><CommentOutlined />{videos.statistics.commentCount}</section>

                </div>
              </div>
            </>
          )
        
          
        })
        
      }


    </>
  );
}

export default ApiRequest;