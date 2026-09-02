export function getShareLocation() {
    const url = new URL(window.location.href);
    const latitude = Number(url.searchParams.get("lat"));
    const longitude = Number(url.searchParams.get("lon"));
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        return null;
    }
    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        return null;
    }
    return {
        latitude,
        longitude,
    };
}
//# sourceMappingURL=url-service.js.map