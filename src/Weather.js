import React from "react";
import axios from 'axios';

export default function Weather(props){

    function handleResponse(response) {
        alert(
            `The weather in ${response.data.name} is 
            ${response.data.main.temp}°C`
            )
    }
    let apiKey = `27b4bb30993897eb41fd3193d860c853`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
    q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <h2>Hello from Weather!</h2>;
}