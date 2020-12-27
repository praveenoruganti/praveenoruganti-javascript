function displayCityAndWeather(response) {
  let city = response.data.name;
  let country=response.data.sys.country;

  console.log(response);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city},${country}`;

  let weatherDescription = response.data.weather[0].main;
  let weatherDescriptionElement = document.querySelector("#description");
  weatherDescriptionElement.innerHTML = weatherDescription;

  let skyIcon = response.data.weather[0].icon;
  let skyIconElement = document.querySelector("#sky-icon");
  skyIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${skyIcon}@2x.png`);
  skyIconElement.setAttribute("alt", weatherDescription);

  celsiusTemperature = Math.round(response.data.main.temp);

  let temperature = response.data.main.temp;
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = `${Math.round(temperature)}°C`

  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(humidity);

  let windSpeed = response.data.wind.speed;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(windSpeed);
}

function getWeekDay(date) {
  let weekDayNumber = date.getDay();
  let weekDay = daysOfTheWeek[weekDayNumber];

  return weekDay;
}

function getMinTemp (response, newDaysIndexes, index) {
  let minTemps = [];
  let smallestMinTemp;

  if (newDaysIndexes[0] === index) {
  for (let i = newDaysIndexes[0]; i < newDaysIndexes[1]; i++) {
    let minTemp = response.data.list[i].main.temp_min;
    minTemps.push(minTemp);
    smallestMinTemp = Math.min(...minTemps);
    }
      return smallestMinTemp;
  }
  if (newDaysIndexes[1] === index) {
  for (let i = newDaysIndexes[1]; i < newDaysIndexes[2]; i++) {
    let minTemp = response.data.list[i].main.temp_min;
    minTemps.push(minTemp);
    smallestMinTemp = Math.min(...minTemps);
    }
      return smallestMinTemp;
  }
    if (newDaysIndexes[2] === index) {
  for (let i = newDaysIndexes[2]; i < newDaysIndexes[3]; i++) {
    let minTemp = response.data.list[i].main.temp_min;
    minTemps.push(minTemp);
    smallestMinTemp = Math.min(...minTemps);
    }
      return smallestMinTemp;
  }
  if (newDaysIndexes[3] === index) {
  for (let i = newDaysIndexes[3]; i < newDaysIndexes[4]; i++) {
    let minTemp = response.data.list[i].main.temp_min;
    minTemps.push(minTemp);
    smallestMinTemp = Math.min(...minTemps);
    }
      return smallestMinTemp;
  }
  if (newDaysIndexes[4] === index) {
  for (let i = newDaysIndexes[4]; i < 40; i++) {
    let minTemp = response.data.list[i].main.temp_min;
    minTemps.push(minTemp);
    smallestMinTemp = Math.min(...minTemps);
    }
      return smallestMinTemp;
  }
}

function getMaxTemp (response, newDaysIndexes, index) {
  let maxTemps = [];

  let highestMaxTemp;

  if (newDaysIndexes[0] === index) {
  for (let i = newDaysIndexes[0]; i < newDaysIndexes[1]; i++) {
    let maxTemp = response.data.list[i].main.temp_max;
    maxTemps.push(maxTemp);
    highestMaxTemp = Math.max(...maxTemps);
    }
      return highestMaxTemp;
  }
  if (newDaysIndexes[1] === index) {
  for (let i = newDaysIndexes[1]; i < newDaysIndexes[2]; i++) {
    let maxTemp = response.data.list[i].main.temp_max;
    maxTemps.push(maxTemp);
    highestMaxTemp = Math.max(...maxTemps);
    }
      return highestMaxTemp;
  }
    if (newDaysIndexes[2] === index) {
  for (let i = newDaysIndexes[2]; i < newDaysIndexes[3]; i++) {
    let maxTemp = response.data.list[i].main.temp_max;
    maxTemps.push(maxTemp);
    highestMaxTemp = Math.max(...maxTemps);
    }
      return highestMaxTemp;
  }
  if (newDaysIndexes[3] === index) {
  for (let i = newDaysIndexes[3]; i < newDaysIndexes[4]; i++) {
    let maxTemp = response.data.list[i].main.temp_max;
    maxTemps.push(maxTemp);
    highestMaxTemp = Math.max(...maxTemps);
    }
      return highestMaxTemp;
  }
  if (newDaysIndexes[4] === index) {
  for (let i = newDaysIndexes[4]; i < 40; i++) {
    let maxTemp = response.data.list[i].main.temp_max;
    maxTemps.push(maxTemp);
    highestMaxTemp = Math.max(...maxTemps);
    }
      return highestMaxTemp;
  }
}

function  displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  let forecasts = response.data.list;
  let newDaysIndexes = [];
  let newDays = forecasts.map(forecast => {return forecast.dt_txt.includes("00:00:00")});
  let value = true;
  let idx = newDays.indexOf(value);
  while (idx != -1) {
    newDaysIndexes.push(idx);
    idx = newDays.indexOf(value, idx + 1);
  }

  for (let index = 0; index < 40; index++) {
  forecast = response.data.list[index];

  if (forecast.dt_txt.includes("00:00:00") === false) {
    continue;
  };

  forecastElement.innerHTML += `
    <div class="col forecast">
        <h6> ${getWeekDay(new Date(forecast.dt_txt))} </h6>
        <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
          class="forecast-icon"alt=""
        ></img>
        <p id="">
          <small>${Math.round(getMinTemp(response, newDaysIndexes, index))}°C/${Math.round(getMaxTemp(response, newDaysIndexes, index))}°C
          <i class="fas fa-thermometer-half"></i>
          </small>
        </p>
    </div>
  `;
  }
}

function search(city) {
  let apiKey = "9df63b55645ce17e7c9655f89644f4fc";
  let unit = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather"
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`

  axios.get(apiUrl).then(displayCityAndWeather);

  apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast"
  apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  search(city);
}

function handleCurrentLocation(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

let apiKey = "a9764671face45f313421331b3c30f46"
let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather"
let unit = "metric"
let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayCityAndWeather);

apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast"
apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayForecast);
}

function getCurrentLocation() {
navigator.geolocation.getCurrentPosition(handleCurrentLocation);
}

function displayCurrentWeekDay () {
  let weekDayNumber = currentDayAndTime.getDay();
  let weekDay = daysOfTheWeek[weekDayNumber];

  let currentWeekDaySpan = document.querySelector("#current-week-day");
  currentWeekDaySpan.innerHTML = weekDay;
}

function displayCurrentDate () {
  let currentMonthNumber = currentDayAndTime.getMonth();
  let months = [ "Jan.", "Feb.",	"Mar.",	"Apr.",	"May", "June", "July", "Aug.", "Sept.",	"Oct.",	"Nov.",	"Dec."]
  let currentMonth = months[currentMonthNumber];

  let currentDayOfTheMonth = currentDayAndTime.getDate();

  let currentYear = currentDayAndTime.getFullYear();

  let currentDate = `${currentMonth} ${currentDayOfTheMonth}, ${currentYear}`;
  let currentDateSpan = document.querySelector("#current-date");
  currentDateSpan.innerHTML = currentDate;
}

function displayCurrentTime () {
  let currentHour = currentDayAndTime.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinute = currentDayAndTime.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  let currentTime = `${currentHour}:${currentMinute}`

  let currentTimeA = document.querySelector("#current-time")
  currentTimeA.innerHTML = currentTime;
}

function convertToCelsius(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");

  temperatureElement.innerHTML = `${celsiusTemperature}°C`;
}

function convertToFarenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = Math.round((celsiusTemperature * 9) /5 + 32);
  let temperatureElement = document.querySelector("#temperature");

  temperatureElement.innerHTML = `${fahrenheitTemperature}°F`
}

let celsiusTemperature = null;

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDayAndTime = new Date();
displayCurrentWeekDay();
displayCurrentDate();
displayCurrentTime();

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFarenheit)
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

search("Hyderabad");

let searchCityForm = document.querySelector(".search-city");
searchCityForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector(".current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);