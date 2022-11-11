export type MapCoords = {
  latitude: number;
  longitude: number;
}

export interface MapApiOptions {
  centerCoords: MapCoords;
  zoomLevel: number;
}
