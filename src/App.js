import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
  const [dataState, setDataState] = useState({});
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
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Title title={dataState.title} />
      <Card imgURL={dataState.url} text={dataState.explanation}/>
    </div>
  );
}

export default App;
