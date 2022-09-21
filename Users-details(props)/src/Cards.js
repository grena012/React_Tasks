import React from "react";
import "./App.css"
function Cards(props){
    return(
        <>
    <div className="my_cards">
        <h4> {props.id} </h4>
        <p>Name:{props.name} </p>
        <p>EmailId:{props.email} </p>
        <img src={props.imgs} className="images"></img>
        <p>Phone_No:{props.mobile_No} </p>
        <p>Password:{props.password} </p>
        <p>Id:{props.no} </p>

        
        
    </div>
    </>
    );
}
export default Cards;