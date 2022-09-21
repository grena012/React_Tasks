import React, { useState } from 'react';
import axios from 'axios';

function Post() {
    const [apidata,setApidata]=useState([])
    const Data=()=>{
        axios.post("https://jsonplaceholder.typicode.com/photos", {
        id : "8",
        AlbumId:"1",
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setApidata(response.data);
        console.log(response)
      })
    }
      return(
          <>
          <button onClick={Data}>Click for post data</button>
          <p>Id: {apidata.id}</p>
          <p> AlbumId:{apidata.AlbumId}</p>
          <p>Title:{apidata.title}</p>
          </>
      )
  }

  export default Post;