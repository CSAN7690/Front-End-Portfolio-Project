// Fetch planet data from the Star Wars API 🐶🦴 💫 🪐
async function fetchPlanetData() {
    try {
        const response = await fetch('https://swapi.dev/api/planets');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Error fetching planet data:', error);
    }
}

// Generate planet cards dynamically
function generatePlanetCards(planets) {
    const planetsContainer = document.querySelector('.planets-container');
    planetsContainer.innerHTML = '';

    planets.forEach((planet) => {
        const card = document.createElement('div');
        card.classList.add('planet-card');
        card.innerHTML = `
        <h3>${planet.name}</h3>
        <p>Climate: ${planet.climate}</p>
        <p>Population: ${planet.population}</p>
        <!-- Add additional planet details as needed -->
      `;
        planetsContainer.appendChild(card);
    });
}

// Fetch planet  data and generate planet  cards on page load 🐶🦴 💫 🪐
document.addEventListener('DOMContentLoaded', async () => {
    const planetsData = await fetchPlanetData();
    generatePlanetCards(planetsData);
});

// Event listener for displaying planet details
const planetCards = document.querySelectorAll('.planet-card');
planetCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        const selectedPlanet =
            /* Retrieve the selected planet from the clicked card */
            showPlanetDetails(selectedPlanet);
    });
});

// Display planet details in a separate section ✨ 🪐 ✨
function showPlanetDetails(planet) {
    const detailSection = document.querySelector('#planet-details');
    detailSection.innerHTML = `
      <h2>${planet.name}</h2>
      <p>Climate: ${planet.climate}</p>
      <p>Population: ${planet.population}</p>
    `;
}
