import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [place, setPlace] = useState('');

  const searchfunction = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=e642c4d9ec943c85465fe480b3f63e89&units=metric`; 
    axios.get(apiUrl)
    .then(res => {
      console.log(res.data);
      setData({...data, celcius: res.data.main.temp, name: res.data.name,
        humidity: res.data.main.humidity, speed: res.data.wind.speed, 
        desp: res.data.weather[0].description, feelslike: res.data.main.feels_like,
        humidity: res.data.main.humidity, 
      })
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="app">
    <p className='heading'>"Weather report app by Austin"</p>
      <div className="search">
        <input
          placeholder='Enter Location'
          type="text" 
          onChange={e => setPlace(e.target.value)}  
          onKeyUp={searchfunction}
          />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.celcius}°F</h1>
          </div>
          <div className="description">
            {data.desp}
          </div>
        </div>

          <div className="bottom">
            <div className="feels">
              <p className='bold'>{data.feelslike}°F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{data.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{data.speed}MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;