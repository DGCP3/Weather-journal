const apiKey = "7484acd06f9a66fedbbd895f7969efaa";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=zip_code&appid=${apiKey}&units=metric`;

/**
 * @param {string} url - url request is made
 * @param {string} [method=GET] - method type, default GET
 * @param {string} body - body for post request
 * @return {Promise} - fulfilled or rejected promise
 */

export async function fetchWeather(zip_code) {
  const url = baseUrl.replace("zip_code", zip_code);
  const response = await fetch(url).catch(console.error);
  return await response.json();
}

export function createWeatherEle(
  location,
  country,
  desc,
  temp,
  feeling,
  date,
  icon
) {
  return ` 
  <details class="weather" open>
  <summary>${location} ${country}  ${date}</summary>
  <div class="d-flex al-center jc-sb" style="margin: auto">
    <div>
      <span>Temperature: ${temp}°</span>
      <span>Description: ${desc}</span>
      <span>Feelings:</span>
      <p>
       ${feeling}
      </p>
    </div>
    <div>
      <img
        src="http://openweathermap.org/img/wn/${icon}@2x.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
</details>
`;
}
export function getUSerInput() {
  const zip = document.getElementById("zip").value;
  const feeling = document.getElementById("feelings").value;
  return { zip, feeling };
}
