export async function getCoordinate(address) {
    const url = `https://nominatim.openstreetmap.org/search` +
        `?q=${encodeURIComponent(address)}` +
        `&format=json`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch location");
    }
    const data = await response.json();
    if (data.length === 0) {
        throw new Error("location not fiund");
    }
    return data.map((item) => {
        return {
            latitude: Number(item.lat),
            longitude: Number(item.lon),
            displayName: item.display_name,
        };
    });
}
//# sourceMappingURL=geocoding-services.js.map