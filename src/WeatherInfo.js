import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherUnits from "./WeatherUnits";


<table>
  <tr>



    <td></td>
    



  </tr>
</table>


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">  

      <h1>{props.data.city}</h1>
     
      <ul> 
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6" >
          <ul>
            <li>Feels:{props.data.feelsLike}°C</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
            <WeatherUnits
        sunrise={props.data.sunrise}
        sunset={props.data.sunset}
      />
          </ul>
          
        </div>
      </div>
     
    </div>
    
  );
}