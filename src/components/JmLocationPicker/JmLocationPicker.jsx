import React, { useState, useEffect } from 'react';
import './JmLocationPicker.scss';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function JmLocationPicker(props) {
  const [location, setLocation] = useState(props.location);
  const [zoom, setZoom] = useState(props.zoom);
  let map = null;
  let marker = null

  const handleLocationSelection = (mapClickEvent) => {
    const { lat, lng } = mapClickEvent.latlng;
    marker = L.marker([lat, lng])
    marker.addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    setLocation([lat, lng]);
  };

  useEffect(() => {
    const root = document.getElementById('JmLocationPickerMap');
    root.innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    map = L.map('map', { center: location, zoom });
    map.on('click', handleLocationSelection);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  });

  useEffect(() => {
    props.onLocationSelection(location);
  }, [location]);

  return (
    <div className="JmLocationPicker">
      <label>Select location</label>
      <div id="JmLocationPickerMap"></div>
    </div>
  );
}

export default JmLocationPicker;