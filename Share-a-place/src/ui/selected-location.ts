import type { Location } from "../services/geocoding-services.js";

export function showSelectedLocation(location: Location): void {
  const container = document.getElementById("selected-location") as HTMLDivElement;

  container.innerHTML = `
        <h3>Selected Location</h3>
        <p>${location.displayName}</p>
    `;
}
