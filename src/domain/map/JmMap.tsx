import React, { useState, useEffect } from 'react';
import './JmMap.scss';
import 'leaflet/dist/leaflet.css'; // TODO: Move to styles
import jmMapApi from './jmMap.api';
import { MapCoords } from './jmMap.type';

type JmMapProps = {
  location: MapCoords;
  onLocationSelection: Function;
}

function JmMap(props: JmMapProps) {
  const initialLocation: MapCoords = props.location;
  const id = 'JmMap';
  const [selectionCoords, setSelectionCoordsLocation] = useState(initialLocation);


  const handleLocationSelection = (selectionCoords: MapCoords) => {
    setSelectionCoordsLocation(selectionCoords);
    props.onLocationSelection(selectionCoords);
  };

  useEffect(() => {
    const map = jmMapApi.initialize(id, initialLocation);
    map.addOpenStreetMapLayer();
    map.registerLocationSelectionClickEventHandler(handleLocationSelection);
    return jmMapApi.destroy(id);
  }, [id]);

  return <div className={id} style={{ width: '100%', height: '100%' }}></div>;
}

export default JmMap;