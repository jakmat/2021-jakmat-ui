import celestialMapper from "./celestial.mapper";

const getCelestialObjects = async (time) => {
  const object = 'sun,moon';
  const timeSeconds = time.valueOf() / 1000;
  const timestamp = timeSeconds.toFixed();
  const lat = '52n';
  const lon = '21e';
  const api = process.env.REACT_APP_JAKMAT_CELESTIAL_URL || '';
  const url = `${api}/observation?objects=${object}&time=${timestamp}&lat=${lat}&lon=${lon}`;
  const response = await fetch(url);
  const rawObjects = await response.json();
  const mappedObjects = celestialMapper.mapCelestialObjects(rawObjects);
  return mappedObjects;
};

const celestialApi = { getCelestialObjects };

export default celestialApi;