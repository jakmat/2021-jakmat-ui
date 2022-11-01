import React from 'react';
import './JmLab.scss';
import JmCelestial from "../../../domain/celestial/JmCelestial";

function JmLab() {
  return (
    <section className="JmLab">
      <h3>Laboratory</h3>
      <JmCelestial/>
    </section>
  );
}

export default JmLab;
