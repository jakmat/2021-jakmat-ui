import celestialMapper from "./celestial.mapper";
import {CelestialObject, MapCoords} from "../map/jmMap.type";

const parseLocation = (location: MapCoords) => {
  const digits = 3;
  const { latitude, longitude } = location;
  const latValue = latitude.toFixed(digits);
  const latHemisphere = latitude < 0 ? 's' : 'n';
  const lonValue = longitude.toFixed(digits);
  const lonHemisphere = longitude < 0 ? 'w' : 'e';
  return {
    latitude: `${latValue}${latHemisphere}`,
    longitude: `${lonValue}${lonHemisphere}`
  };
}

const getCelestialObjects = async (objects: CelestialObject[], time: number, location: MapCoords) => {
  const objectCodes = objects.map(object => object.code);
  const objectQueryString = objectCodes.join(',');
  const timeSeconds = time.valueOf() / 1000;
  const timestamp = timeSeconds.toFixed();
  const { latitude, longitude } = parseLocation(location);
  const api = process.env.REACT_APP_JAKMAT_CELESTIAL_URL || '';
  const url = `${api}/observation?objects=${objectQueryString}&time=${timestamp}&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url);
  const rawObjects = await response.json();
  const mappedObjects = celestialMapper.mapCelestialObjects(rawObjects);
  return mappedObjects;
};

const celestialApi = { getCelestialObjects };

export default celestialApi;
