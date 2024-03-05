import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherComponents from './components/WeatherComponents'
import Loading from './components/Loading'
import Error from './components/Error'

function App() {

  const [position, setPosition] = useState()

  const [weather, setWeather] = useState()

  const [temp, setTemp] = useState()

  const [loading, setLoading] = useState(true)

  const [err,setErr]= useState(false)


  const success = info => {
    setPosition({
      lat: info.coords.latitude,
      lng: info.coords.longitude,
    })
  }

  const error = error => {
    if(error){
      setErr(true)
    }
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)

  }, [])




  useEffect(() => {
    if (position) {
      const key = 'a245f90bedf0bdcc1a2d7552b71dce7b';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=${key}`;
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          setTemp({ celsius, farenheit })
        })
        .catch(err => {
          console.log(err)
        }).finally(setLoading(false))

    }
  }, [position])

  console.log()
  const objStyle = {
    backgroundImage: `url(/${weather && weather.weather[0].icon}.jpeg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh"
  }

  const objStyle2 = {
    backgroundImage: `url(/11d.jpeg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh"
  }


if(err){
  return( <div style={objStyle2}   className='flex justify-center items-center'>
    <Error/>
    </div>)
}
  return (
    <div style={objStyle} className=' flex justify-center items-center'>
      {loading ? <Loading /> : <WeatherComponents weather={weather} temp={temp} />}
    </div>
  )
}

export default App
