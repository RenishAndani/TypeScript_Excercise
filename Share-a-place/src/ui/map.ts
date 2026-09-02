import L from "leaflet";

export class MapManager {
  private map: L.Map;
  private marker: L.Marker | null = null;

  constructor() {
    this.map = L.map("map").setView([20.5937, 78.9629], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(this.map);
  }

  showLocation(latitude: number, longitude: number): void {
    this.map.setView([latitude, longitude], 15);

    if (this.marker) {
      this.marker.remove();
    }

    this.marker = L.marker([latitude, longitude]);

    this.marker.addTo(this.map);
  }
}
