export interface Location {
    latitude: number;
    longitude: number;
    displayName: string;
}
export declare function getCoordinate(address: string): Promise<Location[]>;
//# sourceMappingURL=geocoding-services.d.ts.map