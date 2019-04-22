const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";


function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function latLonUrl(lat, lon, unit) {
  return `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function zipUrl2(zip2) {
  return `${API_STEM}q=${zip2}&units=metric&APPID=${WEATHER_API_KEY}`;
}

function latLonUrl2(lat2, lon2, unit) {
  return `${API_STEM}lat=${lat2}&lon=${lon2}&units=metric&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(url) {
  return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    .catch(error => {
      console.error(error);
    });
}


function fetchZipForecast(zip) {
  return fetchForecast(zipUrl(zip));
}

function fetchLatLonForecast(lat, lon) {
  return fetchForecast(latLonUrl(lat, lon));
}

function fetchZipForecast2(zip) {
  return fetchForecast(zipUrl2(zip));
}

function fetchLatLonForecast2(lat, lon) {
  return fetchForecast(latLonUrl2(lat, lon));
}

export default {
  fetchZipForecast: fetchZipForecast,
  fetchLatLonForecast: fetchLatLonForecast,
  fetchZipForecast2: fetchZipForecast2,
  fetchLatLonForecast2: fetchLatLonForecast2
  
};
