// Fetch 🐶🦴 data from the Star Wars API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Generate planet cards dynamically 🪐
function generatePlanetCards(planets) {
    const planetsContainer = document.querySelector('.planets-container');
    planetsContainer.innerHTML = '';

    planets.forEach((planet) => {
        const card = document.createElement('div');
        card.classList.add('planet-card');
        card.innerHTML = `
        <h3>${planet.name}</h3>
        <p>Climate: ${planet.climate}</p>
        <p>Terrain: ${planet.terrain}</p>
      `;
        planetsContainer.appendChild(card);
    });
}

// Display planet details in separate section
function showPlanetDetails(planet) {
    const detailSection = document.querySelector('#planet-details');
    detailSection.innerHTML = `
      <h2>${planet.name}</h2>
      <p>Climate: ${planet.climate}</p>
      <p>Terrain: ${planet.terrain}</p>
    `;
}

// Filter planets based on search input
function searchPlanets(searchInput, planets) {
    const filteredPlanets = planets.filter((planet) =>
        planet.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredPlanets;
}

// Function to handle the form submission in planets.html
function handlePlanetFormSubmit(event) {
    event.preventDefault();

    // Retrieve the search term from the input field
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();

    // Check if the search term is empty
    if (searchTerm === '') {
        displayErrorMessage('Please enter a search term.');
        return;
    }


    filterPlanetCards(searchTerm);
}

// Function to display an error message in planets.html
function displayErrorMessage(message) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    const form = document.getElementById('search-form');
    form.appendChild(errorElement);
}

// Add event listener to the form submission in planets.html
const planetSearchForm = document.getElementById('search-form');
planetSearchForm.addEventListener('submit', handlePlanetFormSubmit);

// Fetch data from the Star Wars API for planets 🐶🦴
const planetsData = fetchData('https://swapi.dev/api/planets')
    .then((data) => generatePlanetCards(data.results))
    .catch((error) => console.log('Error fetching planets:', error));

// Event listener for planet cards to display details
document.addEventListener('click', (event) => {
    if (event.target.closest('.planet-card')) {
        const selectedPlanet = /* Retrieve the selected planet from the clicked card */
            showPlanetDetails(selectedPlanet);
    }
});

// Event listener for search form to filter planets
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = /* Retrieve the search input value */
        filteredPlanets = searchPlanets(searchInput, planetsData);
    generatePlanetCards(filteredPlanets);
});
