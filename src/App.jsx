import { useEffect, useState } from 'react'
import Hightlights from './components/Hightlights'
import SideBar from './components/SideBar'
import WeekForcast from './components/WeekForcast'
import './index.css'
import axios from 'axios'

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('Kathmandu');

  let api_key = '4c4d0dfbf0dfa375839c7501229b904d';

  useEffect( () => {
    const loadWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`)
        setWeatherData([response.data])
      }
      catch (error) {
        console.error('Error fetching weather data:', error)
        setWeatherData(null);
      }
    }
    loadWeatherData();
  },[city])
  
  console.log(weatherData);


  return (
    <div className='bg-slate-100 flex'>
      <SideBar setCity={setCity} />
      <div className='p-8 w-full'>
        <Hightlights />
        <WeekForcast />
      </div>
    </div>
  )
}

export default App
