import React, { useEffect, useState } from 'react';
import './JmChart.scss';
import jmChartApi from "./jmChart.api.ts";

function JmChart(props) {
  const id = 'JmChart';
  const [objects, setObjects] = useState('');

  useEffect(() => {
    setObjects(props.objects);
    const chart = jmChartApi.initialize(id);
    chart.add(objects);
    return jmChartApi.destroy(id);
  }, [id]);

  return <div className={id}></div>;
}

export default JmChart;
