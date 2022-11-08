import React, { useState, useEffect } from 'react';
import './JmLocationPicker.scss';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function JmLocationPicker(props) {
  const { onLocationSelection } = props;
  const [location, setLocation] = useState([51.76822, 19.45743]);

  const handleSelection = (lat, lon) => {
    setLocation(lat, lon);
  };

  useEffect(() => {
    const root = document.getElementById('JmLocationPickerMap');
    root.innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    const zoom = 16;
    const map = L.map('map', { center: location, zoom });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  });

  useEffect(() => {
    onLocationSelection(location);
  }, [location]);

  return (
    <div className="JmLocationPicker">
      <label>Select location</label>
      <div id="JmLocationPickerMap"></div>
    </div>
  );
}

export default JmLocationPicker;