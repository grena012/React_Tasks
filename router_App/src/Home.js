import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
         <header>
             <nav className="Home">
             <Link to="/">Home</Link><br/>
             <Link to="/Users">Users</Link>
             <br/>
             <Link to="/Admin">Admin</Link>
            
             </nav>
         </header>
        </>
    );
}

export default Home;