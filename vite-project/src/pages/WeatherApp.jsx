import axios from 'axios'
import {useState, useEffect} from 'react'
import WeatherCard from '../components/weatherApp/WeatherCard'

export default function WeatherApp() {
    const [weather, setWeather] = useState()
    const [search, setSearch] = useState('')

    useEffect(() => {
        if(search) onClick()
    }, [])

    const weatherApi = 'https://api.openweathermap.org/data/2.5/weather'
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
                q: search,
                units: 'metric',
                appid: token
            }
        }).then((response) => {
            return response
        }).catch().finally()

        setWeather(apiResponse.data)
    }

    function onSearch(event){
        setSearch(event.target.value)
    }

  return (
    <>
        <div>WeatherApp</div>

        <input type="text" onChange={onSearch} />
        <button 
        onClick={onClick} 
        style={{ border: "1px solid red" }}
        >
            Search
        </button>

        <WeatherCard weather={weather} search={search}/>
        {/* <ForecastCard weather={weather}/> */}
    </>
  )
}
