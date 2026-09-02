import type { Location } from "./geocoding-services.js";

export function createShareURL(location: Location): string {
  const url = new URL(window.location.href);

  url.searchParams.set("lat", location.latitude.toString());

  url.searchParams.set("lon", location.longitude.toString());

  return url.toString();
}
