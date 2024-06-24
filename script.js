async function findPlant() {
    const locationInput = document.getElementById('locationInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!locationInput) {
        resultDiv.textContent = "Please enter a location.";
        return;
    }

    const apiUrl = `https://openfarm.cc/api/v1/crops/?filter[location]=${locationInput}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const plant = data.data[0];
            resultDiv.innerHTML = `
                <h2>${plant.attributes.name}</h2>
                <p>Description: ${plant.attributes.description}</p>
                <img src="${plant.attributes.image_url}" alt="${plant.attributes.name}" style="width: 200px; height: auto;">
            `;
        } else {
            resultDiv.textContent = `Sorry, we don't have information for ${locationInput}.`;
        }
    } catch (error) {
        resultDiv.textContent = "An error occurred while fetching data.";
        console.error("Error fetching data:", error);
    }
}
