export function createShareURL(location) {
    const url = new URL(window.location.href);
    url.searchParams.set("lat", location.latitude.toString());
    url.searchParams.set("lon", location.longitude.toString());
    return url.toString();
}
//# sourceMappingURL=share-service.js.map