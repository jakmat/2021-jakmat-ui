import React, { useState } from 'react';
import './JmDashboard.scss';
import JmCelestial from "../celestial/JmCelestial.tsx";
import JmMap from '../map/JmMap.tsx';
import { MapCoords } from "../map/mapApi.type";

function JmDashboard() {
  const centerCoords: MapCoords = { latitude: 52, longitude: 19 };
  const [location, setLocation] = useState(centerCoords);
  return (
    <section className="JmDashboard">
      <JmMap location={location} onLocationSelection={setLocation}/>
      <JmCelestial location={location}/>
    </section>
  );
}

export default JmDashboard;
