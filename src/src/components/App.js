import React from "react";
import LogIn from "./LogIn";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";
import Home from "./Home";
import axios from "axios";



const App = (url) => {
    console.log(url.url)
        if(url.url === '/login' || url.url == '/')
        {
        return (<LogIn />);
    }
    if(url.url == '/login/forgot')
    {
         return (<ForgotPassword />);
    }
     if(url.url == '/login/register')
    {
         return (<Register />);
    }
    if(url.url === "/home")
    {
        return (<Home  />);        
    }
    return ("<h2> Error </h2>");
}

App.propTypes = {
    url : React.PropTypes.string.isRequired
}
export default App;
