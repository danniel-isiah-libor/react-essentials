import axios from 'axios'
import {useState, useEffect} from 'react'
import {format} from 'date-fns'

export default function WeatherCard({ weather, search }) {
    const [forecast, setForecast] = useState()

    useEffect(() => {
        if(search) fetchForecast()
    }, [weather])

    const forecastApi = 'https://api.openweathermap.org/data/2.5/forecast'
    const token = 'c153494e41a68784f0391cd1d1de3727'

    async function fetchForecast() {
        const apiResponse = await axios.get(forecastApi, {
            params: {
                q: search,
                units: 'metric',
                appid: token
            }
        }).then((response) => {
            return response
        }).catch().finally()

        setForecast(apiResponse.data)
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
    <div>
        {
            (weather) ?
                <>
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

                    <div>
                        <h2>Forecast</h2>

                        {
                            (forecast?.list.length) && forecast.list.map((item, index) => {
                                return <div key={index}>
                                    <h3>
                                        {
                                            format(new Date(item.dt * 1000), 'EEE, MMMM-dd') // yyyy-MM-dd
                                        }
                                    </h3>
                                    <p>
                                        {item.weather[0].description}
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </> 
            : <div>No data found</div>
        }
    </div>
  )
}
