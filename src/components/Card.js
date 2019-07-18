import React from "react";
import { Paragraph, Img1 } from "./StyledComponents";
import { Grid } from "semantic-ui-react";

function Card({imgURL, text, copyright}){
    return(
        <Grid>
            <Grid.Column width={4}>
                <Img1 src={imgURL} />
            </Grid.Column>
            <Grid.Column width={5}>
                <p>{'\u00a9'}{copyright}</p>
            </Grid.Column>
            <Grid.Column width={3}>
                <Paragraph>{text}</Paragraph>
             </Grid.Column>
        </Grid>
    );
       
};


export default Card;

