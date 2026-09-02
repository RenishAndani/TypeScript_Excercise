export function renderLocationResults(locations, onLocationSelected) {
    const resultsContainer = document.getElementById("location-results");
    resultsContainer.innerHTML = "";
    locations.forEach((location) => {
        const resultElement = document.createElement("div");
        resultElement.className = "location-result";
        resultElement.innerHTML = `
            <p>${location.displayName}</p>
        `;
        resultElement.addEventListener("click", () => {
            document.querySelectorAll(".location-result").forEach((element) => {
                element.classList.remove("selected");
            });
            resultElement.classList.add("selected");
            onLocationSelected(location);
        });
        resultsContainer.appendChild(resultElement);
    });
}
//# sourceMappingURL=location-results.js.map