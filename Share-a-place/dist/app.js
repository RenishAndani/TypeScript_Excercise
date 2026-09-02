import { getCoordinate } from "./services/geocoding-services.js";
import { MapManager } from "./ui/map.js";
import { renderLocationResults } from "./ui/location-results.js";
import { showLoading, showError, clearStatus } from "./ui/status.js";
import { showSelectedLocation } from "./ui/selected-location.js";
import { createShareURL } from "./services/share-service.js";
import { getShareLocation } from "./services/url-service.js";
const locationForm = document.getElementById("location-form");
const addressInput = document.getElementById("address");
const searchButton = document.getElementById("search-button");
const shareButton = document.getElementById("share-button");
let selectedLocation = null;
const mapManager = new MapManager();
const sharedLocation = getShareLocation();
if (sharedLocation) {
    mapManager.showLocation(sharedLocation.latitude, sharedLocation.longitude);
}
locationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const address = addressInput.value.trim();
    clearStatus();
    if (!address) {
        showError("Please enter an address.");
        return;
    }
    searchButton.disabled = true;
    showLoading();
    try {
        const locations = await getCoordinate(address);
        // console.log("Latitude:", location.latitude);
        // console.log("Longitude:", location.longitude);
        // console.log("DisplayName:", location.displayName);
        // console.log(locations);
        renderLocationResults(locations, (location) => {
            console.log("selected location:", location);
            showSelectedLocation(location);
            mapManager.showLocation(location.latitude, location.longitude);
            selectedLocation = location;
            searchButton.disabled = false;
        });
        clearStatus();
        // createMap(location.latitude, location.longitude);
    }
    catch (error) {
        console.log(error);
        showError("Unable to find location.Please try another address");
    }
    finally {
        searchButton.disabled = false;
    }
});
shareButton.addEventListener("click", async () => {
    console.log("inside share");
    if (!selectedLocation) {
        return;
    }
    const shareUrl = createShareURL(selectedLocation);
    console.log(shareUrl);
    await navigator.clipboard.writeText(shareUrl);
    alert("Text copied! You can now paste it using Ctrl+V.");
    console.log("Share URL:", shareUrl);
});
//# sourceMappingURL=app.js.map