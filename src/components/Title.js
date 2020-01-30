import React from "react";
import { Header1, Div, Header2, Header3 }from "./StyledComponents";
function Title({title, date}){
    return(
        <Div>
           <Header2>Daily Dose of NASA</Header2>
            <Header1>"{title}"</Header1>
            <Header3>{date}</Header3>
        </Div>
    )
}


export default Title;