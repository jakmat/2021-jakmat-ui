import React, { useState, useEffect, useRef } from 'react';
import './JmMap.scss';
import 'leaflet/dist/leaflet.css'; // TODO: Move to styles
import mapApi from '../mapApi.ts';
import { MapCoords } from '../mapApi.type.ts';

function JmMap(props) {
  const initialLocation: MapCoords = props.location;
  const id = 'JmMap';
  const [selectionCoords, setSelectionCoordsLocation] = useState(initialLocation);


  const handleLocationSelection = (selectionCoords: MapCoords) => {
    setSelectionCoordsLocation(selectionCoords);
    props.onLocationSelection(selectionCoords);
  };

  useEffect(() => {
    const map = mapApi.initialize(id, initialLocation);
    map.addOpenStreetMapLayer();
    map.registerLocationSelectionClickEventHandler(handleLocationSelection);
    return mapApi.destroy(id);
  }, [id]);

  return <div className={id} style={{ width: '100%', height: '100%' }}></div>;
}

export default JmMap;