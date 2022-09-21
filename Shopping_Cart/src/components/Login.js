import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../CSS/Style.css';
import Glogin from "./GoogleLogin";


 const Login = () => {

  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const [mydata,setMydata] = useState([]);
  const navigate=useNavigate();
     

    const onsubmit = (e) =>{
      e.preventDefault();
      axios
      .post("https://fakestoreapi.com/auth/login", {
      username : username ,  password : password
      })
      .then((response) => {

        if(response.data.token){
            navigate("/product");
        }
        else{
            <p>incorrect information</p>
        }
        setMydata(response.data);
        console.log(response)
      })
      
      setMydata([mydata]);
    }
   return(
     <>
     <div id="form">
     <form onSubmit={onsubmit}>
      <div>
        <h2> Login</h2>
      
        <input type="text" id="userinput" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/><br/><br/>
        <input type="password" id="userinput" placeholder=" Password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/><br/>
        <button onClick={onsubmit}>Login</button>
        <h4>or</h4>
        <br/>
        <br/>
        
          <Glogin/>
        
        {/* <button>Sign in with Google</button> */}
        </div>
        </form>
        </div>

    
        <p>{mydata.token}</p>
        


     </>
   );
 }

 export default Login;
