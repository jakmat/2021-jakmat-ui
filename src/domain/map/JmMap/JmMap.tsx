import React, { useState, useEffect } from 'react';
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
  }, [id]);

  return <div id={id}></div>;
}

export default JmMap;