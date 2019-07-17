import React from "react";

function Card({imgURL, text}){
    return(
        <div>
            <img src={imgURL} alt="nasa img"/>
            <p>This is my description{text}</p>
        </div>
    )
}


export default Card;