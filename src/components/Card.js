import React from "react";

function Card({imgURL, text, copyright}){
    return(
        <div>
            <img src={imgURL} alt="nasa img"/>
            <p>{'\u00A9'}{copyright}</p>
            <p>{text}</p>
        </div>
    )
}


export default Card;