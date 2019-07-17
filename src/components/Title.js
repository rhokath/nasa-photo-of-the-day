import React from "react";

function Title({title, date}){
    return(
        <div className="title-card">
           <h2>Daily Dose of NASA</h2>
            <h1>"{title}"</h1>
            <h3>{date}</h3>
        </div>
    )
}


export default Title;