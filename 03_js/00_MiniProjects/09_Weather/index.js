const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apikey = "c7c148be5de71748bf356bd110923b12";

weatherForm.addEventListener('submit',async event=>{
    event.preventDefault(); // Prevent form from submitting normally
    const city = cityInput.value;
    if(city){
        try{
            const weatherData=await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    } else {
        displayError('Please enter a city name.');
    }
});

async function getWeatherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response=await fetch(apiurl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}
function displayWeatherInfo(data) {
    const {
        name: city,
        main: {temp,humidity},
        weather: [{description,id}]}=data;
    card.textContent="";
    card.style.display="flex";
    card.style.flexDirection="column";
    const cityDisplay=document.createElement("h1");
    const tempDisplay=document.createElement("p");
    const humidityDisplay=document.createElement("p");
    const descDisplay=document.createElement("p");
    const weatherEmoji=document.createElement("p");

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp-273.15).toFixed(1)}°C`;
    humidityDisplay.textContent=`Humidity: ${humidity}%`;
    descDisplay.textContent=description;
    weatherEmoji.textContent=getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}
function getWeatherEmoji(weatherId) {
    //you can check the weather condition codes from OpenWeatherMap API documentation
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈️"; // Thunderstorm
        case weatherId >= 300 && weatherId < 500:
            return "🌧️"; // Drizzle
        case weatherId >= 500 && weatherId < 600:
            return "🌧️"; // Rain
        case weatherId >= 600 && weatherId < 700:
            return "❄️"; // Snow
        case weatherId >= 700 && weatherId <= 799:
            return "🌫️"; // Atmosphere (fog, mist, etc.)
        case weatherId === 800:
            return "☀️"; // Clear
        case weatherId > 800 && weatherId < 900:
            return "☁️"; // Clouds
        default:
            return "❓"; // Default case for unhandled conditions
    }
}
function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent=message;
    errorDisplay.classList.add('errorDisplay');
    card.textContent = ''; // Clear previous content
    card.style.display = 'block';
    card.appendChild(errorDisplay);
}