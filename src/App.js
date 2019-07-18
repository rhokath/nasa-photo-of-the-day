import React, { useState, useEffect} from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import Title from "./components/Title";
import Card from "./components/Card";
import Button from "./components/Button";
import StyleContainer from "./components/SemanticComponents";

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const [dataState, setDataState] = useState({});
  const [dateChange, setDateChange]= useState('2012-03-14')
  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    // .then(reponse => Response.json())
    .then(response => {
      console.log(response.data)
      const nasaObject = response.data;
      setDataState(nasaObject)
    })
    .catch(error => {
      console.log("error not working!", error)
    })
  }, [])
  return (
    <WrapperDiv>
      <Title title={dataState.title} date={dataState.date} />
      <Card imgURL={dataState.url} copyright={dataState.copyright} text={dataState.explanation}/>
      <Button />
      <StyleContainer/>
    </WrapperDiv>
  );
}

export default App;
