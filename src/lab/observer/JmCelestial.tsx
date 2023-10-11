import React, { useState } from 'react';
import './JmCelestial.scss';
import celestialApi from "./celestial.api";
import celestialType from "./celestial.type";
import JmDateTimePicker from "../../common/components/JmDateTimePicker/JmDateTimePicker";
import JmCombobox, {JmListItem} from "../../common/components/JmCombobox/JmCombobox";
import JmButton from "../../common/components/JmButton/JmButton";
import JmChart from "./JmChart/JmChart";
import { MapCoords } from "../map/jmMap.type";

type JmCelestialProps = {
  location: MapCoords
}

function JmCelestial(props: JmCelestialProps) {
  const [date, setDate] = useState(Date.now());
  const [objects, setObjects]: any[] = useState([]);
  const [selectedObjects, setSelectedObjects]: any[] = useState([]);
  const [location, setLocation] = useState(props.location);

  const getCelestialObjects = async () => {
    const objects = celestialType.celestialObjects.filter(object => selectedObjects.includes(object.id));
    const celestialObjects = await celestialApi.getCelestialObjects(objects, date, props.location);
    setObjects(celestialObjects);
  }

  const handleSelection = (selection: never[]) => {
    setSelectedObjects(selection);
  }

  return (
    <div className="JmCelestial">
      <div className={"JmCelestial__filters"}>
        { /* <JmDateTimePicker className="JmCelestial__date-time" date={date} onDateSelection={setDate}/> */ }
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
