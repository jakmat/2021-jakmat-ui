import React, { useState, useEffect } from 'react';
import './JmCelestial.scss';
import celestialApi from "./celestial.api";
import JmDateTimePicker from "../../components/JmDateTimePicker/JmDateTimePicker";
import JmButton from "../../components/JmButton/JmButton";

function JmCelestial() {
  const [date, setDate] = useState(Date.now());
  const [objects, setObjects] = useState([{}]);

  const getCelestialObjects = async () => {
    const celestialObjects = await celestialApi.getCelestialObjects(date);
    setObjects(celestialObjects);
  }

  // useEffect(() => {
  //   async function getCelestialObjects() {
  //     const celestialObjects = await celestialApi.getCelestialObjects(date);
  //     setObjects(celestialObjects);
  //   }
  //   getCelestialObjects();
  // }, []);

  const renderObjects = () => {
    if (objects.length) {
      return objects.map((object, index) => {
        const { name, azimuth, altitude } = object;
        return <li key={index}>
          <span>{ name } (az: {azimuth}, alt: {altitude})</span>
        </li>;
      })
    }
    return <li>No objects...</li>
  };

  return (
    <div className="JmCelestial">
      <JmDateTimePicker className="JmCelestial__date-time" date={date} onDateSelection={setDate}/>
      {/* <JmLocationPicker/> */}
      {/* <JmCombobox/> */}
      <JmButton text={'Fetch objects'} onClick={getCelestialObjects}/>
      <ul>{ renderObjects() }</ul>
    </div>
  );
}

export default JmCelestial;
