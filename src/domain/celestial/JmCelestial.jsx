import React, { useState, useEffect } from 'react';
import './JmCelestial.scss';
import celestialApi from "./celestial.api";
import celestialType from "../../domain/celestial/celestial.type";
import JmDateTimePicker from "../../components/JmDateTimePicker/JmDateTimePicker";
import JmCombobox from "../../components/JmCombobox/JmCombobox";
import JmLocationPicker from "../../components/JmLocationPicker/JmLocationPicker";
import JmButton from "../../components/JmButton/JmButton";

function JmCelestial() {
  const initialLocation = [52, 19];
  const initialZoom = 5;
  const [date, setDate] = useState(Date.now());
  const [objects, setObjects] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [location, setLocation] = useState(initialLocation);


  const getCelestialObjects = async () => {
    const objects = celestialType.celestialObjects.filter(object => selectedObjects.includes(object.id));
    const celestialObjects = await celestialApi.getCelestialObjects(objects, date, location);
    setObjects(celestialObjects);
  }

  const handleSelection = (selection) => {
    setSelectedObjects(selection);
  }

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
      <div className={"JmCelestial__map"}>
        <JmLocationPicker location={initialLocation} zoom={initialZoom} onLocationSelection={setLocation}/>
      </div>
      <div className={"JmCelestial__filters"}>
        <JmDateTimePicker className="JmCelestial__date-time" date={date} onDateSelection={setDate}/>
        <JmCombobox
          items={celestialType.celestialObjects}
          onSelection={handleSelection}
          hasInput={false}
          hasMenu={true}
          isMenuOpened={true}
          label={'Select Celestial Objects'}
          placeholder={'No Celestial Objects...'}/>
        <JmButton text={'Display Objects'} isDisabled={!selectedObjects.length} onClick={getCelestialObjects}/>
      </div>
      <div className={"JmCelestial__sky"}>
        <ul>{ renderObjects() }</ul>
      </div>
    </div>
  );
}

export default JmCelestial;
