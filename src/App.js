// const root = document.getElementById("root");

// const msg = document.createElement("h1");
// msg.innerHTML = "Hey there !!";

// root.appendChild(msg)

// const heading = React.createElement("h1",{}, "Hello by react !!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Components/Navigation";
import Head_carousel from "./Components/Head_Carousel";

const heading = React.createElement("h1",{}, "Hello by react by installing them thru npm !!"); //react element

let App = ()=> 

    <div id="root">
        <Navigation/>
        <Head_carousel/>
    </div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);