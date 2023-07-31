import axios from 'axios';
import { useState } from 'react';
import './index'


function App() {
  const [data, setdata] = useState({})
  const [location, setlocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5b59d7e48c9928b478870e0fcbd482a6`



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setdata(res.data)
        console.log(res.data)
      })
      setlocation('')
    }
  }



  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          placeholder="Enter a location"
          onChange={event => setlocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className='container'>
        <div className="top">
          <div className='location'>

            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°C</h1> : null}

          </div>
          <div className='desc'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className='bottom'>
            <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} Kmph</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>}

      </div>
    </div>

  );
}

export default App;
