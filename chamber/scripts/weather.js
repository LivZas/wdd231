const currentWeatherContainer = document.getElementById("current-weather");
const forecastContainer = document.getElementById("weather-forecast");

const apiKey = "92d1e82115c7eb1b2692c239e7e1b017";
const city = "Caracas";
const units = "metric";

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

fetch(currentWeatherURL)
  .then(response => response.json())
  .then(data => {
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    const temp = data.main.temp.toFixed(1);
    const tempMin = data.main.temp_min.toFixed(1);
    const tempMax = data.main.temp_max.toFixed(1);
    const humidity = data.main.humidity;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    currentWeatherContainer.innerHTML = `
      <img src="${icon}" alt="${description}">
      <p><strong>${temp}°C</strong> - ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
      <p>High: ${tempMax}°C | Low: ${tempMin}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Sunrise: ${sunrise} | Sunset: ${sunset}</p>
    `;
  });

fetch(forecastURL)
  .then(response => response.json())
  .then(data => {
    const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    forecastContainer.innerHTML = forecastList.map(item => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
      const description = item.weather[0].description;
      const temp = item.main.temp.toFixed(1);

      return `
        <div>
          <p><strong>${day}</strong></p>
          <img src="${icon}" alt="${description}" title="${description}">
          <p>${temp}°C</p>
        </div>
      `;
    }).join("");
  });
