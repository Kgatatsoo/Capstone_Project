import React, { useState } from 'react'
import axios from 'axios'


function App() {
  const [data, setData] =useState({});
  const [location, setLocation] = useState('');

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e5e7b343bdafbd282bc4eb37a3ba050e`;

  const searchLocation = (event) => {
    if (event.key ==='Enter'&&location){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
  })
  .catch((error) =>{
    console.error("Error retrieving data:",error);
    alert('Error retrieving location. Please try again');
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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            
          </div>
          {data.name != undefined &&
          <div className="bottom">
          <div className="feels">
           {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
          <p>Feels like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null}
           
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.main ? <p className='bold'>{data.wind.speed.toFixed()}km/h</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
          }
          
        </div>
      </div>

    </div>
  );
}


export default App

