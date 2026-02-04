const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apikey = "c7c148be5de71748bf356bd110923b12";

weatherForm.addEventListener('submit',event=>{
    event.preventDefault(); // Prevent form from submitting normally
    const city = cityInput.value;
    if(city){
        getWeatherData(city)
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            displayError('Could not fetch weather data. Please try again later.');
            console.error('Error fetching weather data:', error);
        });
    } else {
        displayError('Please enter a city name.');
    }
});

async function getWeatherData(city) {
    
}
function displayWeatherData(data) {
    
}
function getWeatherEmoji(weatherId) {
    
}
function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent=message;
    errorDisplay.classList.add('errorDisplay');
    card.textContent = ''; // Clear previous content
    card.style.display = 'block';
    card.appendChild(errorDisplay);
}