const plants = {
    "California": "California Poppy",
    "Texas": "Bluebonnet",
    "Florida": "Orange Tree",
    "New York": "Sugar Maple",
    "India": "Neem Tree",
    "Australia": "Eucalyptus",
    // Add more countries and states with their suitable plants
};

function findPlant() {
    const locationInput = document.getElementById('locationInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (plants[locationInput]) {
        resultDiv.textContent = `A suitable plant for ${locationInput} is the ${plants[locationInput]}.`;
    } else {
        resultDiv.textContent = `Sorry, we don't have information for ${locationInput}.`;
    }
}
