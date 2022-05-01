import { createWeatherEle, fetchWeather, getUSerInput } from "./util.js";

document.getElementById("generate").addEventListener("click", async (e) => {
  e.preventDefault();
  let date = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  const { zip, feeling } = getUSerInput();
  if (!zip || !feeling) return;
  toggleSpinner();
  const weather = await fetchWeather(zip).catch(console.error);
  toggleSpinner();
  const {
    weather: [{ main, icon }],
    main: { temp },
    sys: { country },
    name,
  } = weather;
  document
    .getElementById("weathers_entries")
    .insertAdjacentHTML(
      "afterbegin",
      createWeatherEle(name, country, main, temp, feeling, date, icon)
    );
  await fetch("http://localhost:4000/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      date: name,
      country,
      main,
      temp,
      feeling,
      date,
      icon,
    }),
  }).catch(console.error);
  document.getElementById("weather_form").reset();
});

function toggleSpinner() {
  document.getElementById("spinner").classList.toggle("d-none");
  document.getElementById("buttonTitle").classList.toggle("d-none");
}

window.addEventListener("load", async () => {
  const weathers = document.getElementById("weathers_entries");
  const weathersList = await fetch("http://localhost:4000/weather").catch(
    console.error
  );
  const weathersListJson = await weathersList.json();
  if (weathersListJson.length < 0) return;
  weathers.innerHTML = weathersListJson
    .reverse()
    .map((weather) => {
      return createWeatherEle(
        weather.name,
        weather.country,
        weather.main,
        weather.temp,
        weather.feeling,
        weather.date,
        weather.icon
      );
    })
    .join("");
});
