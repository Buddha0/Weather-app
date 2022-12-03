let apiKey = `0997dc520ec4b21c2501f7d686b572f1`;
let search_button = document.getElementById("search_btn");
let form = document.querySelector("form");
let infos = document.querySelector(".other-info");
let temp = document.querySelector(".temp-info");


async function defaultData() {                        //returning default api data without searching
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=${apiKey}&units=metric`
  );
  let response = await data.json();
  return showingAllDatas(response);
}
defaultData();

async function searchedWeatherDatas(city) {                    //returning searched weather datas
  
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  let response = await data.json();
  return showingAllDatas(response);
}

function showingAllDatas(data) {                  //returning datas from html
 
  temp.innerHTML = `  <p><span>${Math.floor(data.main.temp)}°C</span></p>
<p>${data.name}</p>`;
  infos.innerHTML = ` <p>Feels like: ${Math.floor(data.main.feels_like)}°C </p>
<p>Humidity: ${data.main.humidity}% </p>
<p>Sky: ${data.weather[0].description}</p>`;
}

form.addEventListener("submit", function (e) {          //returning api datas from searched value
  e.preventDefault();
  searchedWeatherDatas(search_button.value);
});

