// import { response } from "express";
import React, { useReducer } from "react";
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

//Detect user location to display weather data automatically ////////

const userLocationUrl =
  "https://api.geoapify.com/v1/ipinfo?apiKey=3c31759e1d5a422db7b5973d07a3ffe1";

let latitude;
let longitude;
let city;
let zipcode;

async function userGeoLocation(userLocationUrl) {
  // saving the response
  const response = await fetch(userLocationUrl);

  // converting data into json and saving into a var
  var data = await response.json();
  console.log(data);
  var latitude = Math.floor(data.location.latitude);
  var longitude = Math.floor(data.location.longitude);
  console.log(latitude);
  console.log(longitude);

  city = data.city.name;
  console.log(city);
  document.getElementById("city").innerText = data.city.name + ",  ";
  //slice state name to 2characters and capitalize them
  const state = data.state.name.slice(0, 2).toUpperCase();

  document.getElementById("state").innerHTML = state;
  console.log(state);

  zipcode = data.postcode;
  console.log(zipcode);

  ////////Weather  api call   /////////

  const weatherApiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=imperial&appid=0436d4bf7cd3cb70116b6a7979f72384";

  const weatherIcon = "openweathermap.org/img/wn/";

  async function getWeatherApi(weatherApiUrl) {
    const response = await fetch(weatherApiUrl);
    //converting the response data into json
    const weatherData = await response.json();
    console.log(weatherData);
    document.getElementById("weather").innerText =
      Math.floor(weatherData.main.temp) + "°";

    document.getElementById("weatherId").innerText =
      weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    console.log(icon);

    document.getElementById("weatherIcon").src = weatherIcon + icon + ".png";
  }
  getWeatherApi(weatherApiUrl);
}
// Calling that async function
userGeoLocation(userLocationUrl);
