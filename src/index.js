import { renderCurrentWeather, renderMainForecast } from './renderViews';
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

app.appendChild(locationDiv);
app.appendChild(currentWeatherForecast);
app.appendChild(mainForecastDiv);

async function getCurrentWeather() {
  const builtURL = `https://api.openweathermap.org/data/2.5/weather?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;
  try {
    const response = await fetch(builtURL);
    if (response.ok) {
      const data = await response.json();

      renderCurrentWeather(currentWeatherForecast, data, preferences);
      return data;
    }
    currentWeatherForecast.innerHTML = '';
    currentWeatherForecast.innerText = response.statusText;
    return response.statusText;
  } catch (e) {
    return e;
  }
}

async function getForecast() {
  const builtURL = `https://api.openweathermap.org/data/2.5/forecast?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;

  try {
    const response = await fetch(builtURL);
    if (response.ok) {
      const data = await response.json();

      renderMainForecast(mainForecastDiv, data.list, preferences);
      return data;
    }
    mainForecastDiv.innerHTML = '';
    mainForecastDiv.innerText = response.statusText;
    return response.statusText;
  } catch (e) {
    return e;
  }
}

getCurrentWeather(currentWeatherForecast);
getForecast();

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
