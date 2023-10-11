export type MapCoords = {
  latitude: number;
  longitude: number;
}

export interface MapApiOptions {
  centerCoords: MapCoords;
  zoomLevel: number;
  keepMapInBounds: boolean;
}

export type CelestialObject = {
  id: string;
  code: string;
  name: string;
}

export type CelestialObjectResponse = {
  objective: string;
  azimuth: number;
  altitude: number;
}

export interface JmMapInstance {
  id: string,
  options: {
    centerCoords: MapCoords,
    zoomLevel: number,
    keepMapInBounds: boolean
  },
  mapRoot: null | HTMLElement,
  mapElement: null | HTMLElement,
  map: any,
  handlers: any,
  mount: Function,
  unmount: Function,
  addOpenStreetMapLayer: Function,
  registerLocationSelectionClickEventHandler: Function
}