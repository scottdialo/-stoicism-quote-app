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

// api url
const api_url = "https://stoicquotesapi.com/v1/api/quotes/random";

// creating the api function
async function getapi(api_url) {
  // saving the response
  const response = await fetch(api_url);

  // converting data into json and saving into a var
  var data = await response.json();
  console.log(data.author);
  console.log(data.body);

  //append the data on the html page
  document.getElementById("author").innerText = data.author;
  document.getElementById("quote").innerText = data.body;
}
// Calling that async function
getapi(api_url);
