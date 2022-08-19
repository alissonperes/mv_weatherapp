import { renderCurrentWeather, renderMainForecast } from './renderViews';

const { APP_ID } = process.env;

async function getCurrentWeather(node, preferences) {
  const builtURL = `https://api.openweathermap.org/data/2.5/weather?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;
  try {
    const response = await fetch(builtURL);
    if (response.ok) {
      const data = await response.json();

      renderCurrentWeather(node, data, preferences);
      return data;
    }
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    node.appendChild(document.createTextNode(response.statusText));
    return response.statusText;
  } catch (e) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    node.appendChild(document.createTextNode(e));
    node.appendChild(
      document.createTextNode(
        "This might be cause by a plugin in your browser, or the openWeatherMap API isn't online at the moment.",
      ),
    );
    return e;
  }
}

async function getForecast(node, preferences) {
  const builtURL = `https://api.openweathermap.org/data/2.5/forecast?q=${preferences.city}&units=${preferences.units}&APPID=${APP_ID}`;

  try {
    const response = await fetch(builtURL);
    if (response.ok) {
      const data = await response.json();

      renderMainForecast(node, data.list, preferences);
      return data;
    }
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    node.appendChild(document.createTextNode(response.statusText));
    return response.statusText;
  } catch (e) {
    return e;
  }
}

export { getCurrentWeather, getForecast };
