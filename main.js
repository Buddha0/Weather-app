let apiKey = `0997dc520ec4b21c2501f7d686b572f1`;
let search_button = document.getElementById("search_btn");
let form = document.querySelector("form");
let infos = document.querySelector(".other-info");
let temp = document.querySelector(".temp-info");
let mainSection = document.querySelector(".main-section");

async function weatherDatas(city) {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  let response = await data.json();
  return tempDatas(response);
}

function tempDatas(data) {
  //showing temp and city name
  temp.innerHTML = `  <p><span>${Math.floor(data.main.temp)}°C</span></p>
<p>${data.name}</p>`;
  return otherDatas(data);
}

function otherDatas(data) {
  //showing humidity, feelslike
  console.log(data);
  infos.innerHTML = ` <p>Feels like: ${Math.floor(data.main.feels_like)}°C </p>
<p>Humidity: ${data.main.humidity}% </p>
<p>Sky: ${data.weather[0].description}</p>`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  weatherDatas(search_button.value);
});
