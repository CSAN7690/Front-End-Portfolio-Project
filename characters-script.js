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
    `;
}

// Filter characters based on search input
function searchCharacters(searchInput, characters) {
    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredCharacters;
}

// Function to handle the form submission in characters.html
function handleCharacterFormSubmit(event) {
    event.preventDefault();

    // Retrieve the search term from the input field
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();

    // Check if the search term is empty
    if (searchTerm === '') {
        displayErrorMessage('Please enter a search term.');
        return;
    }

    // Perform the desired effect based on the submitted form data
    // For example, you can filter the character cards based on the search term
    filterCharacterCards(searchTerm);
}

// Function to display an error message in characters.html
function displayErrorMessage(message) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    const form = document.getElementById('search-form');
    form.appendChild(errorElement);
}

// Add event listener to the form submission in characters.html
const characterSearchForm = document.getElementById('search-form');
characterSearchForm.addEventListener('submit', handleCharacterFormSubmit);


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
    const searchInput =
        /* Retrieve the search input value */
        filteredCharacters = searchCharacters(searchInput, charactersData);
    generateCharacterCards(filteredCharacters);
});

