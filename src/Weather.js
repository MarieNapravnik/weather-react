import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `27b4bb30993897eb41fd3193d860c853`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            onChange={updateCity}
            placeholder="Enter a city..."
            autoFocus="on"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>{" "}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C </li>
          <li className="description">Description: {weather.description} </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>Wind: {Math.round(weather.wind)} km/h </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            onChange={updateCity}
            placeholder="Enter a city..."
            autoFocus="on"
            autoComplete="off"
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

