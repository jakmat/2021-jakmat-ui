type CenterCoords = {
  latitude: number;
  longitude: number;
}

export interface MapApiOptions {
  centerCoords: CenterCoords;
  zoomLevel: number;
}
