import React, { useState, useEffect } from 'react';
import './JmMap.scss';
import 'leaflet/dist/leaflet.css'; // TODO: Move to styles
import mapApi from '../mapApi.ts';
import { MapApiOptions, MapCoords } from '../mapApi.type.ts';

function JmMap() {
  const centerCoords: MapCoords = {
    latitude: 52,
    longitude: 19
  };
  const zoomLevel: number = 5;
  const [id, setId] = useState('JmMap');
  const [selectionCoords, setSelectionCoordsLocation] = useState(centerCoords);

  const handleLocationSelection = (selectionCoords: MapCoords) => {
    setSelectionCoordsLocation(selectionCoords);
    console.log(selectionCoords)
  };

  useEffect(() => {
    const mapApiOptions: MapApiOptions = {
      centerCoords: selectionCoords,
      zoomLevel
    };
    const map = mapApi.initialize(id, mapApiOptions);
    map.addOpenStreetMapLayer();
    map.registerLocationSelectionClickEventHandler(handleLocationSelection);
  }, [id]);

  return <div id={id}></div>;
}

export default JmMap;