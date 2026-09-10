const form = document.getElementById("predictionForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const area = document.getElementById("area").value;
    const bedrooms = document.getElementById("bedrooms").value;
    const location = document.getElementById("location").value;

    const url = `/predict?area=${encodeURIComponent(area)}&bedrooms=${encodeURIComponent(bedrooms)}&location=${encodeURIComponent(location)}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        console.log("DATA:", data);
        console.log("PREDICTED PRICE:", data.predicted_price);
        console.log("TYPE:", typeof data.predicted_price);

        resultDiv.className = "success";
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `<strong>Predicted Price:</strong> ${data.predicted_price} VND`;

    } catch (error) {
        resultDiv.className = "error";
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `<strong>Error:</strong> Failed to fetch data (${error.message})`;
    }
});