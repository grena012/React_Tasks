import React, { useState } from 'react';
import axios from 'axios';

function Api() {
   
    const [apidata,setApidata]=useState([])
    const [no,setNo]= useState();
    

    const fetchApi=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${no}`)
        .then((response)=>{
            console.log(response);

            setApidata(response.data)
        })
    }
  return (
    <>
       <input type="number"placeholder="Enter any number "  value={no} onChange={(e) => setNo(e.target.value)}/><br/><br/>
       <button className='button' onClick={fetchApi}>Click me</button>

       <div>
           <>
             <p>Id:  {apidata.id}</p><hr></hr>
             <p>AlbumId:  {apidata.albumId}</p><hr></hr>
             <p>Title:  {apidata.title}</p><hr></hr>
             <p>Url:  {apidata.url}</p><hr></hr>
             <p>Thumbnailurl  :{apidata.thumbnailUrl}</p><hr></hr>
           </>

            
       </div>
    </>
  );

}

export default Api;
