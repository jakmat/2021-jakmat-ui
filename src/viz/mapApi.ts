import leafletApi from "../plugins/leafletApi";
import { MapApiOptions } from './mapApi.type';

const mapApi = {
  instances: {},
  constructor(id: string, options: MapApiOptions) {
    return {
      id,
      centerCoords: options.centerCoords,
      zoomLevel: options.zoomLevel,
      mapRoot: null,
      mapElement: null,
      map: null,
      mount() {
        this.mapRoot = document.getElementById(this.id);
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.style = { width: '100%', height: '100%' };
        this.mapRoot.innerHTML = this.mapElement;
        this.map = leafletApi.getMap(this.id, {
          centerCoords: this.centerCoords,
          zoomLevel: this.zoomLevel
        });
      },
      unmount() {
        this.map = null;
        this.mapElement = null;
      },
      addOpenStreetMapTileLayer() {
        leafletApi.addOpenStreetMapLayerToMap(this.map);
      }
    }
  },
  initialize(id: string, options: MapApiOptions) {
    if (this.instances[id]) throw Error ('Map instance already exists');
    this.instances[id] = this.constructor(id, options);
    this.instances[id].mount();
  },
  destroy(mapId: string) {
    if (!this.instances[mapId]) throw Error ('Map instance does not exist');
    this.instances[mapId].unmount();
    delete this.instances[mapId];
  },
};

export default mapApi;