import React, {useEffect, useState} from 'react';
import './JmChart.scss';

function JmChart(props) {
  const [objects, setObjects] = useState('');
  const renderObjects = () => {
    if (props.objects.length) {
      const celestialObjects = props.objects.map((object, index) => {
        const { name, azimuth, altitude } = object;
        return <li key={index}>
          <span>{ name } (az: {azimuth}, alt: {altitude})</span>
        </li>;
      });
      return celestialObjects;
    }
  };

  useEffect(() => {
    const renderedObjects = renderObjects();
    setObjects(renderedObjects);
  }, [props.objects]);

  return <ul className="JmChart">{ objects }</ul>;
}

export default JmChart;
