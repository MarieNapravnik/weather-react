import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return <div className="App">
    <div className="container">
   <h1> My weather app in react </h1>
<Weather defaultCity="Brussels"/>

    <footer>
      Coded by Marie Nápravníková and is
      <a href="https://github.com/MarieNapravnik/weather-react"
      rel="noreferrer"
      target="_blank"> open-sourced on GitHub 
      </a>{" "}
      and{" "}
          <a
            href="https://awesome-leakey-a19f7a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
    </footer>
    </div>
    </div>;
}

