import React from "react";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {  
    return (
      <div className="WeatherUnits">
        <div className="weatherWrapper">  
          <div className="row row-cols-2">
            <div className="col-6">
              <ul>
                <div className="weatherToday">
                  <div className="sunrise-sunset">
                    <li>Sunrise:<span><Sunrise sunrise={props.sunrise} /></span> {" "}</li> 
                    <li>Sunset:<span><Sunset sunset={props.sunset} /></span> {" "}</li> 
                  </div>
                </div> 
              </ul>
            </div>    
          </div> 
        </div>
      </div>
    )
  }


