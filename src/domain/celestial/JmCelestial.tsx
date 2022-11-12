import React, { useState } from 'react';
import './JmCelestial.scss';
import celestialApi from "./celestial.api.ts";
import celestialType from "./celestial.type.ts";
import JmDateTimePicker from "../../components/JmDateTimePicker/JmDateTimePicker";
import JmCombobox from "../../components/JmCombobox/JmCombobox";
import JmButton from "../../components/JmButton/JmButton";
import JmChart from "./JmChart/JmChart.tsx";

function JmCelestial(props) {
  const [date, setDate] = useState(Date.now());
  const [objects, setObjects] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [location, setLocation] = useState(props.location);

  const getCelestialObjects = async () => {
    const objects = celestialType.celestialObjects.filter(object => selectedObjects.includes(object.id));
    const celestialObjects = await celestialApi.getCelestialObjects(objects, date, props.location);
    setObjects(celestialObjects);
  }

  const handleSelection = (selection) => {
    setSelectedObjects(selection);
  }

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
        <JmButton text={'Display Objects'} isDisabled={!selectedObjects.length || !location} onClick={getCelestialObjects}/>
      </div>
      <JmChart objects={objects}/>
    </div>
  );
}

export default JmCelestial;
