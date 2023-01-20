import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <h1 className="brand-name">WeatherCast</h1>
        <div>
          <h2 className="time">7:10 AM</h2>
          <h4 className="date">Friday, January 20, 2023</h4>
        </div>
      </div>
      <div className="search-section">
        <input
          className="location-input-box"
          type="text"
          placeholder="Enter Location..."
        />
        <Button variant="primary">Search</Button>
      </div>
      <div className="weather-info-section">
        <div className="basic-info">
          <h2 className="location">Sri Lanka, LK</h2>
          <h2 className="temprature-text">24°C</h2>
          <div className="condition">
            <img
              src="http://cdn.weatherapi.com/weather/64x64/night/116.png"
              alt=""
            />
            <h2 className="condition-text">Partly Cloudy</h2>
          </div>
        </div>
        <div className="other-info">
          <div className="wind">
            <h4>Wind</h4>
            <h4>24 km/h</h4>
          </div>
          <div className="wind-direction">
            <h4>Wind Direction</h4>
            <h4>NNW</h4>
          </div>
          <div className="presure">
            <h4>Presure</h4>
            <h4>1024 hPa</h4>
          </div>
          <div className="humidity">
            <h4>Humidity</h4>
            <h4>70%</h4>
          </div>
          <div className="feels-like">
            <h4>Feels Like</h4>
            <h4>25°C</h4>
          </div>
          <div className="air-quality">
            <h4>Air Quality (CO2)</h4>
            <h4>250</h4>
          </div>
        </div>
      </div>
      <div>
        <p className="footer">
          Copyright &copy; 2020-2022 | All rights reserved. Made with
          <span id="heart-icon"> &#10084;</span> by
          <a
            href="https://lakshanrukantha.github.io"
            title="Official Website"
            target="_blank"
          >
            Lakshan Rukantha
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
