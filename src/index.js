//Challenge one
//function formatDate(newDate) {
let now = new Date();
let unformattedMinutes = now.getMinutes();
function formatMinutes(date) {
  const minutes = date.getMinutes();
  return minutes < 10 ? `0${minutes}` : minutes;
}

let formattedMinutes = formatMinutes(now);
console.log(formattedMinutes);
let hours = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentDate = document.querySelector("#current-date-text");
currentDate.innerHTML = `${day} ${hours}:${formattedMinutes}`;

//Challenge two
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  console.log(cityInput.value);
  let cityLabel = document.querySelector("#current-city");
  cityLabel.innerHTML = cityInput.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
