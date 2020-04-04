import { getForecast, getCurrentWeather } from './api';
import './style.css';

const app = document.getElementById('app');
const get = () => JSON.parse(localStorage.getItem('preferences'));
const set = (value) => {
  localStorage.setItem('preferences', JSON.stringify(value));
  return get();
};

const basePreferences = {
  units: 'metric',
  city: '',
};

const preferences = get() || set(basePreferences);

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

const unitsToggle = document.getElementById('units-toggle');
unitsToggle.onclick = () => {
  preferences.units = preferences.units === 'metric' ? 'imperial' : 'metric';
  set(preferences);
  unitsHeader.innerText = `Units: ${preferences.units}`;
  getCurrentWeather(currentWeatherForecast, preferences);
  getForecast(mainForecastDiv, preferences);
};

const changeLocationBtn = document.getElementById('change-location-btn');
changeLocationBtn.onclick = () => {
  const locationInput = document.getElementById('change-location-input');
  if (locationInput.checkValidity()) {
    preferences.city = locationInput.value;
    set(preferences);
    getCurrentWeather(currentWeatherForecast, preferences);
    getForecast(mainForecastDiv, preferences);
    locationInput.value = '';
  } else {
    locationInput.reportValidity();
  }
};

async function posSuccess(position) {
  const { latitude, longitude } = position.coords;
  const geoCodingApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en-us`;
  fetch(geoCodingApiUrl)
    .then((response) => response.json())
    .then((response) => {
      const cityObj = response.localityInfo.administrative;
      basePreferences.city = cityObj[cityObj.length - 2].isoName;
      set(basePreferences);
      getCurrentWeather(currentWeatherForecast, basePreferences);
      getForecast(mainForecastDiv, preferences);
      return basePreferences;
    });
}

function errorCase() {
  basePreferences.city = 'Siberia';
  set(basePreferences);
  getCurrentWeather(currentWeatherForecast, basePreferences);
  getForecast(mainForecastDiv, basePreferences);

  return basePreferences;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(posSuccess, errorCase);
}
