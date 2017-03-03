import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
 
 var getUrl = () => {
     console.log(window.initialdata)
     return (window.initialdata);
 }
 ReactDOM.render(
  <App url = {getUrl()}/>,
    document.getElementById('root')
    );