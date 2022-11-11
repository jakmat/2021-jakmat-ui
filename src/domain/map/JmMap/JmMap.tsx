import React, { useState, useEffect } from 'react';
import './JmMap.scss';
import 'leaflet/dist/leaflet.css'; // TODO: Move to styles
import mapApi from '../mapApi.ts';
import { MapApiOptions, MapCoords } from '../mapApi.type.ts';

function JmMap(props) {
  const mapApiOptions: MapApiOptions = {
    centerCoords: props.location,
    zoomLevel: 5
  };
  const [id, setId] = useState('JmMap');
  const [selectionCoords, setSelectionCoordsLocation] = useState(props.location);

  const handleLocationSelection = (selectionCoords: MapCoords) => {
    setSelectionCoordsLocation(selectionCoords);
    props.onLocationSelection(selectionCoords);
  };

  useEffect(() => {
    const map = mapApi.initialize(id, mapApiOptions);
    map.addOpenStreetMapLayer();
    map.registerLocationSelectionClickEventHandler(handleLocationSelection);
  }, [id]);

  return <div id={id}></div>;
}

export default JmMap;