import React, { useEffect, useState } from "react";

const Title=()=>{
    const [num,setNum]=useState(0);
    useEffect(()=>{
        document.title = `my-app(${num})`
    });
    return(
        <div>
            {/* <h1>{num}</h1> */}
            <button onClick={()=>setNum(num+1)}>Click this button for change the number in favicon</button>
        </div>
    )
}
export default Title