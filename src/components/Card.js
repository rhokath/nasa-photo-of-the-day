import React from "react";
import { Paragraph, Img1, Div } from "./StyledComponents";
import { Grid } from "semantic-ui-react";

function Card({imgURL, text, copyright}){
    return(
        <Grid>
            <Grid.Column width={1}>
                <Img1 src={imgURL} />
            </Grid.Column>
            <Grid.Column width={5}>
                <Div>{'\u00a9'}{copyright}</Div>
            </Grid.Column>
            <Grid.Column width={3}>
                <Paragraph>{text}</Paragraph>
             </Grid.Column>
        </Grid>
    );
       
};


export default Card;

