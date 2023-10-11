import {JmListItem} from "../../common/components/JmCombobox/JmCombobox";
import {CelestialObject} from "../map/jmMap.type";

// export type CelestialObject = {
//   code: string;
//   id: string;
//   name: string;
// }

const celestialObjects: CelestialObject[] = [
  { id: '1', code: 'sun', name: 'Sun' },
  { id: '2', code: 'mercury', name: 'Mercury' },
  { id: '3', code: 'venus', name: 'Venus' },
  { id: '4', code: 'moon', name: 'Moon' },
  { id: '5', code: 'mars', name: 'Mars' },
  { id: '6', code: 'jupiter_barycenter', name: 'Jupiter' },
  { id: '7', code: 'saturn_barycenter', name: 'Saturn' },
  { id: '8', code: 'uranus_barycenter', name: 'Uranus' },
  { id: '9', code: 'neptune_barycenter', name: 'Neptune' },
  { id: '10', code: 'pluto_barycenter', name: 'Pluto' }
];

const celestialType = { celestialObjects };

export default celestialType;