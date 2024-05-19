import axios from "axios";

const weatherApi = "https://api.openweathermap.org/data/2.5/weather";
const forecastApi = "https://api.openweathermap.org/data/2.5/forecast";
const token = "c153494e41a68784f0391cd1d1de3727";

function useOpenWeather() {
  const useFetchWeatherApi = (search) => {
    return axios.get(weatherApi, {
      params: {
        q: search,
        units: "metric",
        appid: token,
      },
    });
  };

  const useFetchForecastApi = (search) => {
    return axios.get(forecastApi, {
      params: {
        q: search,
        units: "metric",
        appid: token,
      },
    });
  };

  return { useFetchForecastApi, useFetchWeatherApi };
}

export default useOpenWeather;
