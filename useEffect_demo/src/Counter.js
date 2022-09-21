import React, { useEffect, useState } from "react";
function Counter(){
const[count,setcount]=useState(0);
useEffect(()=>{
    alert('your application is running ')
    
});
return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{
        setcount(count+1);
    }}
    >increase</button>
    <button onClick={()=>{
        setcount(count-1);
    }}
    >decrease</button>
    </>
)
}
export default Counter;
    
