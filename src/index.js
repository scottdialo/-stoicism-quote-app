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

// api url
const api_url = "https://stoicquotesapi.com/v1/api/quotes/random";

// creating the api function
async function getapi(api_url) {
  // saving the response
  const response = await fetch(api_url);

  // converting data into json and saving into a var
  var data = await response.json();
  // console.log(data.author);
  // console.log(data.body);

  //append the data on the html page
  document.getElementById("author").innerText = data.author;
  document.getElementById("quote").innerText = data.body;
}
// Calling that async function
getapi(api_url);

//Weather display api call
const weatherApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=38&lon=-121&units=imperial&appid=0436d4bf7cd3cb70116b6a7979f72384";
const weatherIcon = "openweathermap.org/img/wn/10d@2x.png";

async function getWeatherApi(weatherApiUrl) {
  const response = await fetch(weatherApiUrl);
  //converting the response data into json
  const weatherData = await response.json();
  console.log(weatherData);
  document.getElementById("weather").innerText =
    Math.floor(weatherData.main.temp) + "°";

  document.getElementById("weatherId").innerText =
    weatherData.weather[0].description;
  document
    .getElementById("weatherIcon")
    .src(" http://openweathermap.org/img/wn/10d@2x.png");
}
getWeatherApi(weatherApiUrl);

//Detect user location to display weather data automatically
