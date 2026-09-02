import type { Location } from "../services/geocoding-services.js";

export function renderLocationResults(
  locations: Location[],
  onLocationSelected: (location: Location) => void,
): void {
  const resultsContainer = document.getElementById("location-results") as HTMLDivElement;

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
