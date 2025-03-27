import React, { useState } from 'react'
import axios from 'axios'


function App() {
  const [data, setData] =useState({});
  const [location, setLocation] = useState('');

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e5e7b343bdafbd282bc4eb37a3ba050e`;

  const searchLocation = (event) => {
    if (event.key ==='Enter'&&location){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
  })
  .catch((error) =>{
    console.error("Error retrieving data:",error);
  });
}
      
};

  return (
    <div className="app">
      <div className="search">
        <input
        type= "text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder='Enter Location'
        />
      </div>


      <div className="container">
        <div className="top">
          <div className="location">
            <p>Pretoria</p>
          </div>
          <div className="temp">
            <h1>27°C</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>27°C</p>
            <p>Temperature</p>
            </div>
            <div className="humidity">
              <p className='bold'>35%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>8 MPH</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default App
