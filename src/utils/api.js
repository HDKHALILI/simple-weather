import axios from 'axios';

const baseURI = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY || process.env.react_app_key;

export function getWeather(location) {
  const encodedURI = encodeURI(`${baseURI}${location}&type=accurate&APPID=${API_KEY}&units=metric`);
  return axios.get(encodedURI)
    .then(({data}) => data)
};
