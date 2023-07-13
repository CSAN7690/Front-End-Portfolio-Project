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

// Generate character cards dynamically 🤔
function generateCharacterCards(characters) {
    const charactersContainer = document.querySelector('.characters-container');
    charactersContainer.innerHTML = '';

    characters.forEach((character) => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Gender: ${character.gender}</p>
        <p>Height: ${character.height}</p>
        <!-- Add additional details as needed -->
      `;
        charactersContainer.appendChild(card);
    });
}

//Display character details in SEPERATE SECTION
function showCharacterDetails(character) {
    const detailSection = document.querySelector('#character-details');
    detailSection.innerHTML = `
      <h2>${character.name}</h2>
      <p>Gender: ${character.gender}</p>
      <p>Height: ${character.height}</p>
      <!-- Add additional details as needed -->
    `;
}

// Filter characters based on search input
function searchCharacters(searchInput, characters) {
    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredCharacters;
}


// Fetch data from the Star Wars API for characters 🐶🦴
const charactersData = fetchData('https://swapi.dev/api/people')
    .then((data) => generateCharacterCards(data.results))
    .catch((error) => console.log('Error fetching characters:', error));

// Event listener to character cards for displaying details
const characterCards = document.querySelectorAll('.character-card');
characterCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        const selectedCharacter = /* Retrieve the selected character from the clicked card */
            showCharacterDetails(selectedCharacter);
    });
});

// Event listener to search form for filtering characters
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = /* Retrieve the search input value */
        filteredCharacters = searchCharacters(searchInput, charactersData);
    generateCharacterCards(filteredCharacters);
});