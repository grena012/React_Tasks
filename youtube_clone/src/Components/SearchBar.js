import React from "react";
import { useState,useEffect} from "react";
import MainHeader from "./Header";
import axios from "axios";
import { DateTime } from 'luxon';
import { useParams,Link } from 'react-router-dom';
import YouTube from "react-youtube";

function SearchBar(){
    const {searchedValue} = useParams();
    const [apidata,setApidata]=useState([])
  
    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=title&q=${searchedValue}&safeSearch=none&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg
          `)
          .then(response => {
            console.log(response.data.items);
            setApidata(response.data.items)
            // setLoading(loading)=true;
            
          })
          .catch(error => {
            console.log(error);
          })
        }, [])
        
        return(
          <>
        
  {
   apidata && apidata.length>0 && apidata.map((videos)=>{
     console.log('VID',videos);
     const snippet= videos.snippet;
     const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
    //  const url=videos.thumbnails.medium.url;
    
     return(
       <>
         
  
         <div className='videocards'>
         <Link to={`/search/${searchedValue}/${videos.id.videoId}`}>
           <img src={videos.snippet.thumbnails.medium.url} alt='#' height={350}></img>
         </Link>
        {/* <YouTube id={videos.id.videoId} height={350}/> */}
           <section>{snippet.title}</section>
           <section>{snippet.channelTitle}</section>
           <section>{timestamp}</section>
          </div>
        
       </>
     )
   })
  }  
          
          
          
          </>
      );
}
export default SearchBar;