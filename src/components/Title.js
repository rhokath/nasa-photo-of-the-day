import React from "react";
import { Header1 }from "./StyledComponents";
function Title({title, date}){
    return(
        <div className="title-card">
           <h2>Daily Dose of NASA</h2>
            <Header1>"{title}"</Header1>
            <h3>{date}</h3>
        </div>
    )
}


export default Title;