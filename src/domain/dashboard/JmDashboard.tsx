import React, { useState } from 'react';
import './JmDashboard.scss';
import JmCelestial from "../celestial/JmCelestial";
import JmMap from '../map/JmMap';
import { MapCoords } from "../map/jmMap.type";

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
