import React, { useState } from 'react';
import './JmCelestial.scss';
import celestialApi from "./celestial.api.ts";
import celestialType from "./celestial.type.ts";
import JmDateTimePicker from "../../components/JmDateTimePicker/JmDateTimePicker";
import JmCombobox from "../../components/JmCombobox/JmCombobox";
import JmButton from "../../components/JmButton/JmButton";

function JmCelestial(props) {
  const [date, setDate] = useState(Date.now());
  const [objects, setObjects] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [location, setLocation] = useState(props.location);


  const getCelestialObjects = async () => {
    console.log(props.location);
    const objects = celestialType.celestialObjects.filter(object => selectedObjects.includes(object.id));
    const celestialObjects = await celestialApi.getCelestialObjects(objects, date, props.location);
    setObjects(celestialObjects);
  }

  const handleSelection = (selection) => {
    setSelectedObjects(selection);
  }

  const renderObjects = () => {
    if (objects.length) {
      const celestialObjects = objects.map((object, index) => {
        const { name, azimuth, altitude } = object;
        return <li key={index}>
          <span>{ name } (az: {azimuth}, alt: {altitude})</span>
        </li>;
      });
      return (
        <div className={"JmCelestial__sky"}>
          <ul>{ celestialObjects }</ul>
        </div>
      );
    }
  };

  return (
    <div className="JmCelestial">
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
      { renderObjects() }
    </div>
  );
}

export default JmCelestial;
