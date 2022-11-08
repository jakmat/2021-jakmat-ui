import React, { useState, useEffect } from 'react';
import './JmCelestial.scss';
import celestialApi from "./celestial.api";
import JmDateTimePicker from "../../components/JmDateTimePicker/JmDateTimePicker";
import JmCombobox from "../../components/JmCombobox/JmCombobox";
import JmLocationPicker from "../../components/JmLocationPicker/JmLocationPicker";
import JmButton from "../../components/JmButton/JmButton";
import celestialType from "../../domain/celestial/celestial.type";

function JmCelestial() {
  const [date, setDate] = useState(Date.now());
  const [objects, setObjects] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [location, setLocation] = useState([]);


  const getCelestialObjects = async () => {
    const objects = celestialType.celestialObjects.filter(object => selectedObjects.includes(object.id));
    const celestialObjects = await celestialApi.getCelestialObjects(objects, date);
    setObjects(celestialObjects);
  }

  const handleSelection = (selection) => {
    setSelectedObjects(selection);
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
      <JmLocationPicker onLocationSelection={setLocation}/>
      <JmCombobox
        items={celestialType.celestialObjects}
        onSelection={handleSelection}
        label={'Select Celestial Objects'}
        placeholder={'No Celestial Objects...'}/>
      <JmButton text={'Fetch objects'} isActive="{ selectedObjects.length }" onClick={getCelestialObjects}/>
      <ul>{ renderObjects() }</ul>
    </div>
  );
}

export default JmCelestial;
