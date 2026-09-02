export function showSelectedLocation(location) {
    const container = document.getElementById("selected-location");
    container.innerHTML = `
        <h3>Selected Location</h3>
        <p>${location.displayName}</p>
    `;
}
//# sourceMappingURL=selected-location.js.map