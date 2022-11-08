import React, { useState, useEffect } from 'react';
// import './JmLocationPicker.scss';

function JmLocationPicker(props) {
  const { onLocationSelection } = props;
  const [location, setLocation] = useState({ lat: '52n', lon: '21e' });

  const handleSelection = (lat, lon) => {
    setLocation(lat, lon);
  };

  useEffect(() => {
    onLocationSelection(location);
  }, [location]);

  return (
    <div className="JmLocationPicker"></div>
  );
}

export default JmLocationPicker;