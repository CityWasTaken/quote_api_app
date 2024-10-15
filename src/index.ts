// Add an input to the page that the user can type a city into

// When they submit or hit a button, you should grab the city they typed and make a request to the weather api
// to get the current weather by that city name

// Once you have the weather data, output the current temp, wind speed and humidity for that city

const cityForm = document.querySelector('#city-form');

function outputWeatherData(weatherData: {
    name: string
    main: {
        temp: number
        humidity: number
    }
    wind: {
        speed: number
    }
}) {
    const cityOutput = document.querySelector<HTMLHeadingElement>('#city-name');
    const tempOutput = document.querySelector<HTMLHeadingElement>('#temp');
    const windOutput = document.querySelector<HTMLHeadingElement>('#wind');
    const humidityOutput = document.querySelector<HTMLParagraphElement>('#humidity');

console.log(weatherData);

    if (cityOutput && tempOutput && windOutput && humidityOutput) {
        cityOutput.innerText = weatherData.name;
        tempOutput.innerHTML = `Temp: ${Math.round(weatherData.main.temp)}&deg;`;
        windOutput.innerText = `Wind Speed: ${weatherData.wind.speed}` + 'mph';
        humidityOutput.innerText = `Humidity: ${weatherData.main.humidity.toString()}%`;
    }
}

async function getWeatherData(eventObj) {
    eventObj.preventDefault();

    const cityInput = document.querySelector<HTMLInputElement>('#city-input');

    const apiKey = '3acc16ffae9e45df92a064e41646355f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=` + apiKey;

    const resObject = await fetch(url);
    const data = await resObject.json();

    outputWeatherData(data);
}

cityForm.addEventListener('submit', getWeatherData)

// async function getStarWarsData () {
//     const resObj = await fetch('https://swapi.dev/api/people/');
//     const data = await resObj.json();

    
//             console.log(data.results[3]);
// }

