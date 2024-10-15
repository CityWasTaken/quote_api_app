// Add an input to the page that the user can type a city into
// when they submit or hit a button, you should grab the city they typed and make a request to the weather api to get the current weather by that city name

// Once you have the weather data, output the current temp, wind speed, and humidity for that city
const cityName = document.querySelector('#city-name');

function outputWeatherData(weatherData) {
    const tempOutput = document.querySelector<HTMLHeadingElement>('#temp');

    tempOutput.innerHTML = `Temp: ${Math.floor(weatherData.main.temp)} &deg`;
    
}

async function getWeatherData() {
    const cityInput = document.querySelector('#city')

    const apiKey = 'ce7fcb7eb209bd55bab7853868a3ff70';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=` + apiKey;

    const resObj = await fetch(url);
    const data = await resObj.json();
    
    
    outputWeatherData(data);
}

getWeatherData();

cityName?.addEventListener('submit', getWeatherData)

// async function getStarWarsData () {
//     const resObj = await fetch('https://swapi.dev/api/people/');
//     const data = await resObj.json();

    
//             console.log(data.results[3]);
// }

