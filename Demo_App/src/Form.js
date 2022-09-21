import React, { useState } from "react";
import './App.css';
import axios from "axios";

 const Form = () => {

  const [fname,setFname]= useState("");
  const [lname,setLname]= useState("");
  const [passwd,setPasswd]= useState("");
  const [mydata,setMydata] = useState([]);
     

    const onsubmit = (e) =>{
      e.preventDefault();
      // const mydata = {firstName : fname , lastName : lname, Password : passwd}
      axios
      .post("https://jsonplaceholder.typicode.com/photos", {
      firstName : fname , lastName : lname, Password : passwd
      })
      .then((response) => {
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
        <h2> Users Data:</h2>
      
        <input type="text" id="userinput" placeholder="Enter your first Name"  value={fname} onChange={(e) => setFname(e.target.value)}/><br/><br/>
        <input type="text" id="userinput" placeholder="Enter your last Name"  value={lname} onChange={(e) => setLname(e.target.value)}></input><br/><br/>
        <input type="password" id="userinput" placeholder="Enter Password" value={passwd} onChange={(e) => setPasswd(e.target.value)}></input><br/><br/>
        <input type="submit" id="button" placeholder="submit" onClick={onsubmit}></input>
        <br/>
        </div>
        </form>
        </div>


        <p>firstName:{mydata.firstName}</p>
        <p>lastName:{mydata.lastName}</p>
        <p>Password:{mydata.Password}</p>


       </>
   );
 }

 export default Form;
