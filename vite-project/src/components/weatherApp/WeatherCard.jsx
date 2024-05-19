import {useState, useEffect} from 'react'
import {format} from 'date-fns'
import useOpenWeather from '../../hooks/useOpenWeather'

export default function WeatherCard({ weather, search }) {
    const [forecast, setForecast] = useState({})
    const {useFetchForecastApi} = useOpenWeather()

    useEffect(() => {
        if(search) fetchForecast()
    }, [weather])

    async function fetchForecast() {
        const apiResponse = await useFetchForecastApi(search)
        .then((response) => {
            return getForecastData(response)
        }).catch().finally()

        setForecast(apiResponse)
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

    function getForecastData(response){
        let list = response.data.list

        list = list.reduce((a, b) => {
            const date = format(new Date(b.dt * 1000), 'yyyy-MM-dd') // 2024-05-19

            if(!a[date]) {
                a[date] = []
            }

            a[date].push(b)

            return a
        }, {})

        console.log(list);

        return list
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
                            (Object.keys(forecast).length) && Object.keys(forecast).map((item, index) => {
                                return <div key={index} style={{ border: "1px solid red" }}>
                                    {
                                        forecast[item].map((forecastItem, key) => {
                                            return <div key={key}>
                                                <h3>
                                                    {
                                                        format(new Date(forecastItem.dt * 1000), 'EEE, MMMM-dd') // yyyy-MM-dd
                                                    }
                                                </h3>
                                                <p>
                                                    {forecastItem.weather[0].description}
                                                </p>
                                            </div>
                                        })
                                    }
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
