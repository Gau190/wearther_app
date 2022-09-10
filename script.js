const APP_ID = "1f926b514393982da5a5ea83a51d6ec7";
var searchInput = document.getElementById("city");
var searchIcon = document.getElementById("search-icon");
const DEFAULT_CITY = "__"
var city = document.getElementById("city-name");
var temp = document.getElementById("temp");
var desc = document.getElementById("desc");
var icon = document.getElementById("icon");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var pressure = document.getElementById("pressure");
var minTemp = document.getElementById("min-temp");
var maxTemp = document.getElementById("max-temp");
var date = document.getElementById("date");
var time = document.getElementById("time");

function searchWeather(){
 console.log("dv")
};

searchInput.addEventListener("change", function(e){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${APP_ID}&units=metric&lang=vi`)
  .then(async response => {
    const data = await response.json();
    console.log(data);
    city.innerHTML = data.name || DEFAULT_CITY;
   
  })
});
    // dùng sự kiện để lấy giá trị trên seach truyền vào biến city lấy keycode 13 phím enter hoặc ấn icon seach get value
    // khi howver vào sẽ nổi lên tạo hiệu ứng thị giác 
    // document.getElementById("city-name").innerHTML = data.name;
    // document.getElementById("temp").innerHTML = data.main.temp;
    // document.getElementById("weather").innerHTML = data.weather[0].description;
    // document.getElementById("humidity").innerHTML = data.main.humidity;
    // document.getElementById("wind-speed").innerHTML = data.wind.speed;
    // document.getElementById("icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;