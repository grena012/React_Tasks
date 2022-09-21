import React, { useEffect, useState } from "react";
function Counter(){
const[count,setCount]=useState("");
// useEffect(()=>{
    // alert('your application is running ')
    
// });
return(
    <>
     <input type="number" value={count} onChange={(event) => setCount(event.target.value)}/><br/>
    {/* <h1>{count}</h1> */}
    <button onClick={()=>{
        setCount(Number(count)+1);
    }}
    >Increase</button>
    <button onClick={()=>{
        setCount(count-1);
    }}
    >Decrease</button>
    <button onClick={()=>{
        setCount(0);
    }}
    >Reset</button>
    </>
)
}
export default Counter;
    