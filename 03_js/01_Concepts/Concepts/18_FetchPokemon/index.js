// fetch = Function used for making HTTP requests to fetch resources.
// (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web. fetch (url, (options})
async function fetchdata() {
    try {
        const pokemon=document.getElementById('pokemonname').value.toLowerCase();
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const pokemonsprite = data.sprites.front_default;
        const imgElement=document.getElementById('pokemonSprite');

        imgElement.src = pokemonsprite;
        imgElement.style.display = 'block'; 
    } catch (error) {
        console.error('Fetch error:', error);
    }
}