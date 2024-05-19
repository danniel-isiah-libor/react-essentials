import axios from 'axios'
import {useState, useEffect} from 'react'

export default function WeatherApp() {
    const [weather, setWeather] = useState()

    useEffect(() => {
        onClick()
    }, [])

    const weatherApi = 'https://api.openweathermap.org/data/2.5/weather'
    const forecastApi = 'https://api.openweathermap.org/data/2.5/forecast'
    const token = 'c153494e41a68784f0391cd1d1de3727'

    // async function process1(){
    //     console.log('Process 1 is running...');

    //     let result = 0

    //     for(let a = 0; a < 100000000; a++) {
    //         result++
    //     }

    //     return result
    // }

    // async function process2(){
    //     // throw 'error'

    //     console.log('Process 2 is running...');

    //     let result = 0

    //     for(let a = 0; a < 100000000; a++) {
    //         result++
    //     }

    //     return result
    // }

    // async function onClick(){
    //     console.log('Loading.....');
    //     console.log('Process start here...');

    //     await Promise.all([
    //         process1(),
    //         process2()
    //     ])
    //     .then(() => {
    //         console.log('All process are completed');
    //     })
    //     .catch(() => {
    //         console.log('error found');
    //     })
    //     .finally(() => {
    //         console.log('Loading stops here....');
    //     })

    //     console.log('Process stop here...');
    // }

    async function onClick(){
        const apiResponse = await axios.get(weatherApi, {
            params: {
                q: 'pasay',
                units: 'metric',
                appid: token
            }
        }).then((response) => {
            return response
        }).catch().finally()

        setWeather(apiResponse.data)
    }

    const getWeatherData = () => {
        if(weather) {
            return {
                temp: weather.main.temp,
                name: weather.name,
                icon: weather.weather[0].icon,
                description: weather.weather[0].description
            }
        }else {
            return {}
        }
    }

  return (
    <>
        <div>WeatherApp</div>
        <button onClick={onClick} style={{ border: "1px solid red" }}> Execute all process </button>

        {
            (weather) ? 
                <div className="bg-white p-4 rounded-lg shadow-lg text-center mb-4">
                    <h2 className="text-2xl font-bold">{getWeatherData().name}</h2>

                    <img
                    src={`http://openweathermap.org/img/wn/${getWeatherData().icon}@2x.png`}
                    alt={getWeatherData().description}
                    className="mx-auto"
                    />

                    <p className="text-lg">{getWeatherData().description}</p>
                    <p className="text-4xl font-bold">{getWeatherData().temp}°C</p>
                </div>
            : <div>No data found</div>
        }
    </>
  )
}
