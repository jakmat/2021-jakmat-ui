import React from 'react';
import './JmLab.scss';
import JmCelestial from "../../../domain/celestial/JmCelestial";
import JmMap from '../../../domain/map/JmMap/JmMap.tsx';

function JmLab() {
  return (
    <section className="JmLab">
      <JmMap/>
      <JmCelestial/>
    </section>
  );
}

export default JmLab;
