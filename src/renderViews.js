const navigatorLanguage = navigator.language || navigator.userLanguage || 'en-US';

const dateFormat = intDate => {
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

function renderCurrentWeather(node, dataList, preferences) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }

  const { weather, main, sys } = dataList;

  const tempUnit = preferences.units === 'metric' ? 'ºC' : ' ºF';
  const currentDate = document.createElement('h4');
  currentDate.innerText = `Updated: ${dateFormat(dataList.dt).date} - ${dateFormat(
    dataList.dt,
  ).hhMM()}`;
  const mainCityDiv = document.createElement('div');
  mainCityDiv.className = 'current-weather-nodes';
  const cityNameHeader = document.createElement('h1');
  cityNameHeader.innerText = dataList.name;
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  weatherIcon.alt = weather[0].description;
  const weatherDescription = document.createElement('h3');
  weatherDescription.innerText = weather[0].description;

  const mainTempDiv = document.createElement('div');
  mainTempDiv.className = 'current-weather-nodes';
  const temperature = document.createElement('h3');
  temperature.innerText = `Temperature: ${main.temp} ${tempUnit}`;
  const feelsLike = document.createElement('h3');
  feelsLike.innerText = `Feels like: ${main.feels_like} ${tempUnit}`;
  const tempMin = document.createElement('h3');
  tempMin.innerText = `Min: ${main.temp_min} ${tempUnit}`;
  const tempMax = document.createElement('h3');
  tempMax.innerText = `Max: ${main.temp_max} ${tempUnit}`;

  const mainOthersDiv = document.createElement('div');
  mainOthersDiv.className = 'current-weather-nodes';
  const pressure = document.createElement('h3');
  pressure.innerText = `Pressure: ${main.pressure} hPa`;
  const humidity = document.createElement('h3');
  humidity.innerText = `Humidity: ${main.humidity}%`;
  const sunrise = document.createElement('h3');
  sunrise.innerText = `Sunrise: ${dateFormat(sys.sunrise).hhMM()}`;
  const sunset = document.createElement('h3');
  sunset.innerText = `Sunset: ${dateFormat(sys.sunset).hhMM()}`;

  const mainCityNodes = [currentDate, cityNameHeader, weatherIcon, weatherDescription];
  const mainTempNodes = [temperature, feelsLike, tempMin, tempMax];
  const miainOthersNode = [pressure, humidity, sunrise, sunset];

  mainCityNodes.forEach(item => {
    mainCityDiv.appendChild(item);
  });

  mainTempNodes.forEach(item => {
    mainTempDiv.appendChild(item);
  });

  miainOthersNode.forEach(item => {
    mainOthersDiv.appendChild(item);
  });

  node.appendChild(mainCityDiv);
  node.appendChild(mainTempDiv);
  node.appendChild(mainOthersDiv);
  return 'This';
}

function renderMainForecast(node, dataList, preferences) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  const tempUnit = preferences.units === 'metric' ? 'ºC' : ' ºF';
  dataList.forEach(item => {
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
    node.appendChild(forecastItem);
  });
}

export { renderCurrentWeather, renderMainForecast };
