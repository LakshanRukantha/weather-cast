import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import logo from "./assets/logo.png";

function App() {
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setCurrentDate(
        new Date().toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const API_KEY = "a7330d35d7fb48b5bb4175450232001";

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    if (location.trim().length > 0 && !/[^a-zA-Z0-9\s]/.test(location)) {
      console.log("pressed");
      setIsLoading(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json?&q=${location}`, {
          headers: {
            KEY: API_KEY,
          },
        })
        .then((response) => {
          setLocationData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
    console.log("not fetched");
  };

  return (
    <div className="App">
      <div className="top-section">
        <div className="brand-section">
          <img src={logo} alt="" />
          <h1 className="brand-name">WeatherCast</h1>
        </div>
        <div className="date-time">
          <h2 className="time">{currentTime}</h2>
          <h4 className="date">{currentDate}</h4>
        </div>
      </div>
      <div className="search-section">
        <input
          className="location-input-box"
          type="text"
          value={location}
          placeholder="Enter Location..."
          onChange={handleChange}
        />
        <Button
          style={{
            display: "flex",
            flexDirection: "coulmn",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="primary"
          className="searchButton"
          disabled={isLoading}
          onClick={handleSearch}
        >
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              className="mr-2"
              aria-hidden="true"
            />
          ) : null}
          Search
        </Button>
      </div>
      <div className="main-content">
        {Object.values(locationData).length !== 0 ? (
          <div className="weather-info-section">
            <div className="basic-info">
              <h2 className="location">
                {locationData.location &&
                  locationData.location.name +
                    ", " +
                    locationData.location.country}
              </h2>
              <div className="temperatures">
                <h2 className="temperature-text">
                  {locationData.current && locationData.current.temp_c + "°C"}
                </h2>
                <div className="divider"></div>
                <h2 className="temperature-text">
                  {locationData.current && locationData.current.temp_f + "°F"}
                </h2>
              </div>
              <div className="condition">
                <img
                  src={
                    locationData.current && locationData.current.condition.icon
                  }
                  alt=""
                />
                <h2 className="condition-text">
                  {locationData.current && locationData.current.condition.text}
                </h2>
              </div>
            </div>
            <div className="other-info">
              <div className="wind">
                <h4>Wind</h4>
                <h4>
                  {locationData.current &&
                    locationData.current.wind_kph + " km/h"}
                </h4>
              </div>
              <div className="wind-direction">
                <h4>Wind Direction</h4>
                <h4>{locationData.current && locationData.current.wind_dir}</h4>
              </div>
              <div className="presure">
                <h4>Presure</h4>
                <h4>
                  {locationData.current &&
                    locationData.current.pressure_mb + " hPa"}
                </h4>
              </div>
              <div className="humidity">
                <h4>Humidity</h4>
                <h4>
                  {locationData.current && locationData.current.humidity + " %"}
                </h4>
              </div>
              <div className="feels-like">
                <h4>Feels Like</h4>
                <h4>
                  {locationData.current &&
                    locationData.current.feelslike_c + " °C"}
                </h4>
              </div>
              <div className="air-quality">
                <h4>Clouds</h4>
                <h4>{locationData.current && locationData.current.cloud}</h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="description-section">
            <p className="description">
              This weather app shows current weather at user's location with
              accurate temperature, wind speed, cloud coverage, humidity and
              pressure information. It's easy to use and provides the necessary
              weather details
            </p>
            <h6 className="mt-2 mb-2">Features: </h6>
            <ol>
              <li className="feature-item">
                Displays current weather conditions for user's current location.
              </li>
              <li className="feature-item">Simple interface.</li>
              <li className="feature-item">
                Current temperature, wind speed, cloud coverage, humidity, and
                pressure information is prominently displayed.
              </li>
              <li className="feature-item">
                User can search any location all over the world.
              </li>
              <li className="feature-item">Real-time weather updates.</li>
            </ol>
          </div>
        )}
      </div>

      <div>
        <p className="footer">
          Copyright &copy; 2023 | All rights reserved. Made with
          <span id="heart-icon"> &#10084;</span> by<span> </span>
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
