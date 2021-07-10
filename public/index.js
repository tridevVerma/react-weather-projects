let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
const currDay = days[date.getDay()];
const currDate =
  date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
const currMonth = months[date.getMonth()];

const cityName = document.getElementsByClassName("form-control")[0];
const submitBtn = document.getElementById("button-addon2");
const day = document.getElementsByClassName("day")[0];
const date_month = document.getElementsByClassName("date_month")[0];
const name_country = document.getElementsByClassName("name_country")[0];
const temp = document.getElementsByClassName("temp")[0];
const temp_status = document.getElementsByClassName("temp-status")[0];

const getInfo = async (e) => {
  e.preventDefault();
  if (cityName.value.length < 1) {
    weatherForecast.innerHTML = "<h2>Give City Name</h2><h1>0&deg;C</h1>";
  } else {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=ceaa8977d395a25ad1171085f4fd1e15`;
      let response = await fetch(url);
      let result = await response.json();

      let name = result.name;
      let country = result.sys.country;
      let temperature = result.main.temp;
      let tempMood = result.weather[0].main;

      //condition to check sunny or cloudy
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
      day.innerText = currDay;
      date_month.innerHTML = `${currDate} ${currMonth}`;
      name_country.innerHTML = `${name}, ${country}`;
      temp.innerHTML = `${temperature}&deg;C`;
    } catch (error) {
      alert("enter valid city name");
      console.log("error occurred : ", error);
    }
  }
};
submitBtn.addEventListener("click", getInfo);
submitBtn.addEventListener("submit", getInfo);
