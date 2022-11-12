import leafletApi from "../../plugins/leafletApi.ts";
import { MapApiOptions, MapCoords } from './jmMap.type.ts';

const jmMapApi = {
  instances: {},
  constructor(id: string, initialLocation: MapCoords) {
    return {
      id,
      options: {
        centerCoords: initialLocation,
        zoomLevel: 5,
        keepMapInBounds: true
      },
      mapRoot: null,
      mapElement: null,
      map: null,
      handlers: {},
      mount() {
        const [mapRoot] = document.getElementsByClassName(this.id);
        this.mapRoot = mapRoot;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.style = { width: '100%', height: '100%' };
        this.mapRoot.appendChild(this.element);
        this.mapElement = this.mapElement;
        this.map = leafletApi.getMap(this.id, this.options);
      },
      unmount() {
        this.map = null;
        this.mapElement = null;
      },
      addOpenStreetMapLayer() {
        leafletApi.addOpenStreetMapLayerToMap(this.map);
      },
      registerLocationSelectionClickEventHandler(handler) {
        leafletApi.registerLocationSelectionClickEventHandler(this.map, handler);
      }
    }
  },
  initialize(id: string, options: MapApiOptions) {
    if (!this.instances[id]) {
      this.instances[id] = this.constructor(id, options);
      this.instances[id].mount();
      return this.instances[id];
    }
    return this.instances[id];
  },
  destroy(mapId: string) {
    if (this.instances[mapId]) {
      this.instances[mapId].unmount();
      delete this.instances[mapId];
    }
  }
};

export default jmMapApi;