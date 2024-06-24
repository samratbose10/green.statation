const plants = [
    { name: "Rose", hint: "I am a beautiful flower, often associated with love and romance." },
    { name: "Sunflower", hint: "I always face the sun and have bright yellow petals." },
    { name: "Tulip", hint: "I am a bulbous plant, often found in gardens in the Netherlands." },
    { name: "Cactus", hint: "I thrive in deserts and have spines instead of leaves." },
    { name: "Bamboo", hint: "I grow very fast and am often used for building and decoration." },

];

let currentPlant;
let remainingAttempts;

function startGame() {
    const randomIndex = Math.floor(Math.random() * plants.length);
    currentPlant = plants[randomIndex];
    remainingAttempts = 3;

    document.getElementById('hint').textContent = `Hint: ${currentPlant.hint}`;
    document.getElementById('result').textContent = "";
    document.getElementById('guessInput').value = "";
}

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value.trim();

    if (userGuess.toLowerCase() === currentPlant.name.toLowerCase()) {
        document.getElementById('result').textContent = `Congratulations! You guessed it right. The plant is ${currentPlant.name}.`;
    } else {
        remainingAttempts--;
        if (remainingAttempts > 0) {
            document.getElementById('result').textContent = `Incorrect! You have ${remainingAttempts} attempts left.`;
        } else {
            document.getElementById('result').textContent = `Sorry, you've run out of attempts. The correct answer was ${currentPlant.name}.`;
        }
    }
}


window.onload = startGame;
