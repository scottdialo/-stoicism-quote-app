import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

//function that display current time
function currentTime() {
  const element = (
    <div className="container">
      {/* <h1 className="title">Time App</h1> */}
      <h2 className="time"> {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(currentTime, 1000);

//create a function taht will display a quote from an api every 60hr or when user click on refresh button
const apiList = [];
//find api or create your own
//make api call
//save quote in an array
//append result on page element
//set interval to refresh new quote
