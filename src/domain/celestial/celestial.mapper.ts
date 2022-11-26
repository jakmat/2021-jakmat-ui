import { CelestialObjectResponse } from "../map/jmMap.type";

const mapCelestialObjects = (objects: CelestialObjectResponse[]) => {
  const mappedObjects = objects.map((object) => {
    return {
      name: object.objective,
      azimuth: object.azimuth.toFixed(),
      altitude: object.altitude.toFixed()
    };
  })
  return mappedObjects;
};

const celestialMapper = { mapCelestialObjects };

export default celestialMapper;
