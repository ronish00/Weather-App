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

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`);
        setWeatherData([response.data]);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      }
    };

    loadWeatherData();

  }, [city]);

  if(!weatherData){
    return (
      <div className='h-[100vh] flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-center align-middle w-[225px]'>{city} city do not exist in this planet. Try another name</h1>
        <button onClick={ () => window.location.reload()} class="rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300">Refresh</button>
      </div>
    )
  }

  console.log(weatherData);
  const temp = weatherData.length > 0 ? Math.floor(weatherData[0].main.temp) : null;
  const humidity = weatherData.length > 0 ? weatherData[0].main.humidity : null;
  const weather = weatherData.length > 0 ? weatherData[0].weather[0].main : null;
  const visibility = weatherData.length > 0 ? weatherData[0].visibility/1000 : null;
  const windSpeed = weatherData.length > 0 ? weatherData[0].wind.speed : null;
  const rain = weatherData.length > 0 ? weatherData[0].rain ? weatherData[0].rain["1h"]*100 : null : null;
  const cityName = weatherData.length > 0 ? weatherData[0].name : null;

  return (
    <div className='bg-slate-100 flex'>
      <SideBar setCity={setCity} temp={temp} weather={weather} rain={rain} name={cityName} />
      <div className='p-8 w-full'>
        <Hightlights humidity={humidity} visibility={visibility} windSpeed={windSpeed} />
        <WeekForcast />
      </div>
    </div>
  )
}

export default App
