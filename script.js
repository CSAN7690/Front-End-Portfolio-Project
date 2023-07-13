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

// Data to Fetch 🐶🦴
const charactersData = fetchData('https://swapi.dev/api/people');
const planetsData = fetchData('https://swapi.dev/api/planets');
const starshipsData = fetchData('https://swapi.dev/api/starships');
