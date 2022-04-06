/* Global Variables */
const apiKey = "7484acd06f9a66fedbbd895f7969efaa";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip={zip_code}&appid=${apiKey}&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

async function fetchWeather(zip_code) {
  const url = baseUrl.replace("{zip_code}", zip_code);
  const response = await fetch(url).catch(console.error);;
  const data = await response.json().catch(console.error);
  return data;
}

document.getElementById("generate").addEventListener("click", async (e) => {
  const zip = document.getElementById("zip").value;
  const weather = await fetchWeather(zip);
  const data = await fetch("localhost:3000/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify(data),
    },
    credentials: "same-origin",
    mode: "cors",
  });
});

function create({ coord: { lon, lat }, main: { temp }, sys: { country } }) {
  const div = document.createDocumentFragment();
  div.innerHTML = `Test`;
  document.getElementsByClassName("holder entry")[0].appendChild(div);
}
