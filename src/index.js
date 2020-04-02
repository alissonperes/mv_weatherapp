import './renderViews';
import './style.css';

const app = document.getElementById('app');
const APP_ID = '07de9ba11ff7a9f82f38e6eee1f5515b';
const get = () => JSON.parse(localStorage.getItem('preferences'));
const set = (value) => {
  localStorage.setItem('preferences', JSON.stringify(value));
  return get();
};

const basePreferences = {
  units: 'metric',
  city: 'Brasília',
};

const preferences = get() || set(basePreferences);

const navigatorLanguage = navigator.language || navigator.userLanguage || 'en-US';

const locationDiv = document.createElement('div');
locationDiv.className = 'location';

const unitsDiv = document.createElement('div');
unitsDiv.className = 'units-div';

const unitsHeader = document.createElement('h3');
unitsHeader.innerText = `Units: ${preferences.units}`;

const toggleUnitBtn = document.createElement('button');
toggleUnitBtn.id = 'units-toggle';
toggleUnitBtn.innerText = 'Toggle units';

unitsDiv.appendChild(toggleUnitBtn);
unitsDiv.appendChild(unitsHeader);
locationDiv.appendChild(unitsDiv);

const newLocationDiv = document.createElement('div');
newLocationDiv.className = 'new-location';
const newLocationInput = document.createElement('input');
newLocationInput.id = 'change-location-input';
newLocationInput.setAttribute('type', 'text');
newLocationInput.setAttribute('placeholder', 'New Location');
newLocationInput.setAttribute('required', 'true');
newLocationDiv.appendChild(newLocationInput);

const newLocationBtn = document.createElement('button');
newLocationBtn.setAttribute('id', 'change-location-btn');
newLocationBtn.setAttribute('type', 'button');
newLocationBtn.setAttribute('name', 'changeLocation');
newLocationBtn.innerText = 'Change Location';
newLocationDiv.appendChild(newLocationBtn);

locationDiv.appendChild(newLocationDiv);

const currentWeatherForecast = document.createElement('div');
currentWeatherForecast.id = 'current-weather';
const mainForecastDiv = document.createElement('div');
mainForecastDiv.id = 'current-forecast';

const dateFormat = (intDate) => {
  const newDate = new Date(intDate * 1000);
  const date = new Date(intDate * 1000).toLocaleDateString(navigatorLanguage);
  function hhMM() {
    const hours = newDate.getHours().toLocaleString(navigatorLanguage, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const minutes = newDate.getMinutes().toLocaleString(navigatorLanguage, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    const dateStr = `${hours}:${minutes}`;
    return dateStr;
  }

  return { date, hhMM };
};

function renderCurrentWeather(dataList) {
  const { weather, main, sys } = dataList;
  const tempUnit = preferences.units === 'metric' ? 'ºC' : ' ºF';
  const currentDate = document.createElement('h4');
  currentDate.innerText = `Updated: ${dateFormat(dataList.dt).date} - ${dateFormat(
    dataList.dt,
  ).hhMM()}`;
  const cityNameHeader = document.createElement('h1');
  cityNameHeader.innerText = dataList.name;
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  weatherIcon.alt = weather[0].description;
  const weatherDescription = document.createElement('h3');
  weatherDescription.innerText = weather[0].description;
  const temperature = document.createElement('h3');
  temperature.innerText = `Temperature: ${main.temp} ${tempUnit}`;
  const feelsLike = document.createElement('h3');
  feelsLike.innerText = `Feels like: ${main.feels_like} ${tempUnit}`;
  const tempMin = document.createElement('h3');
  tempMin.innerText = `Min: ${main.temp_min} ${tempUnit}`;
  const tempMax = document.createElement('h3');
  tempMax.innerText = `Max: ${main.temp_max} ${tempUnit}`;
  const pressure = document.createElement('h3');
  pressure.innerText = `Pressure: ${main.pressure} hPa`;
  const humidity = document.createElement('h3');
  humidity.innerText = `Humidity: ${main.humidity}%`;
  const sunrise = document.createElement('h3');
  sunrise.innerText = `Sunrise: ${dateFormat(sys.sunrise).hhMM()}`;
  const sunset = document.createElement('h3');
  sunset.innerText = `Sunset: ${dateFormat(sys.sunset).hhMM()}`;

  const allNodesCurrentWeather = [
    currentDate,
    cityNameHeader,
    weatherIcon,
    weatherDescription,
    temperature,
    feelsLike,
    tempMin,
    tempMax,
    pressure,
    humidity,
    sunrise,
    sunset,
  ];
  allNodesCurrentWeather.forEach((item) => currentWeatherForecast.appendChild(item));
}

async function getCurrentWeather() {
  const builtURL = `https://api.openweathermap.org/data/2.5/weather?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;
  try {
    const response = await fetch(builtURL);
    if (response.ok) {
      const data = await response.json();
      currentWeatherForecast.innerHTML = '';
      renderCurrentWeather(data);
      return data;
    }
    currentWeatherForecast.innerHTML = '';
    currentWeatherForecast.innerText = response.statusText;
    return response.statusText;
  } catch (e) {
    return e;
  }
}

function renderMainForecast(dataList) {
  const tempUnit = preferences.units === 'metric' ? 'ºC' : ' ºF';
  dataList.forEach((item) => {
    const weatherItem = item.weather[0];
    const mainItem = item.main;
    const forecastItem = document.createElement('div');
    forecastItem.className = 'forecast-item';
    const dateHeading = document.createElement('h5');
    dateHeading.innerText = dateFormat(item.dt).date;
    const dateHourHeading = document.createElement('h5');
    dateHourHeading.innerText = dateFormat(item.dt).hhMM();
    const forecastImg = document.createElement('img');
    forecastImg.src = `https://openweathermap.org/img/wn/${weatherItem.icon}.png`;
    const forecastDescription = document.createElement('p');
    forecastDescription.appendChild(document.createTextNode(weatherItem.description));
    const forecastTemperature = document.createElement('p');
    forecastTemperature.appendChild(document.createTextNode(`${mainItem.temp} ${tempUnit}`));

    forecastItem.appendChild(dateHeading);
    forecastItem.appendChild(dateHourHeading);
    forecastItem.appendChild(forecastImg);
    forecastItem.appendChild(forecastDescription);
    forecastItem.appendChild(forecastTemperature);
    mainForecastDiv.appendChild(forecastItem);
  });
}

async function getForecast() {
  const builtURL = `https://api.openweathermap.org/data/2.5/forecast?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;

  try {
    const response = await fetch(builtURL).preventDefault();
    if (response.ok) {
      const data = await response.json();
      mainForecastDiv.innerHTML = '';
      renderMainForecast(data.list);
      return data;
    }
    mainForecastDiv.innerHTML = '';
    mainForecastDiv.innerText = response.statusText;
    return response.statusText;
  } catch (e) {
    return e;
  }
}

getCurrentWeather();
getForecast();

app.appendChild(locationDiv);
app.appendChild(currentWeatherForecast);
app.appendChild(mainForecastDiv);

const unitsToggle = document.getElementById('units-toggle');
unitsToggle.onclick = () => {
  preferences.units = preferences.units === 'metric' ? 'imperial' : 'metric';
  set(preferences);
  unitsHeader.innerText = `Units: ${preferences.units}`;
  getCurrentWeather();
  getForecast();
};

const changeLocationBtn = document.getElementById('change-location-btn');
changeLocationBtn.onclick = () => {
  const locationInput = document.getElementById('change-location-input');
  if (locationInput.checkValidity()) {
    preferences.city = locationInput.value;
    set(preferences);
    getCurrentWeather();
    getForecast();
    locationInput.value = '';
  } else {
    locationInput.reportValidity();
  }
};
