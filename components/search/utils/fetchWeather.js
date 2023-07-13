import axios from 'axios';

export default async function fetchWeather(city, nbDay) {
    const response = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1a5193fc496849f8aca13845230407&q=${city}&days=${nbDay}`)
                        .then((res) => res.data.forecast.forecastday);
    return response;
}