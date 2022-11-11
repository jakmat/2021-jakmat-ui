import {
  map, Map, MapOptions,
  tileLayer, TileLayer, TileLayerOptions
} from 'leaflet';
import { MapApiOptions } from "../domain/map/mapApi.type";

const getMap = (id: string, mapApiOptions: MapApiOptions): Map => {
  const { centerCoords, zoomLevel } = mapApiOptions;
  const { latitude, longitude } = centerCoords;
  const options: MapOptions = {
    center: [latitude, longitude],
    zoom: zoomLevel
  };
  return map(id, options);
};

const addTileLayerToMap = (tileLayerInstance: TileLayer, mapInstance: Map) => {
  tileLayerInstance.addTo(mapInstance);
};

const addOpenStreetMapLayerToMap = (mapInstance: Map): void => {
  const urlTemplate = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tileLayerOptions: TileLayerOptions = {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };
  const openStreetMapTileLayer: TileLayer = tileLayer(urlTemplate, tileLayerOptions);
  addTileLayerToMap(openStreetMapTileLayer, mapInstance);
};

const registerEventHandler = (mapInstance: Map, eventType: string, handler: Function) => {
  mapInstance.on(eventType, handler);
};

const registerLocationSelectionClickEventHandler = (mapInstance: Map, handler: Function) => {
  const setCoords = (mapClickEvent) => {
    const { lat, lng } = mapClickEvent.latlng;
    handler({
      latitude: lat,
      longitude: lng
    });
  }
  registerEventHandler(mapInstance, 'click', setCoords);
};

const leafletApi = {
  getMap,
  addOpenStreetMapLayerToMap,
  registerLocationSelectionClickEventHandler
};

export default leafletApi;