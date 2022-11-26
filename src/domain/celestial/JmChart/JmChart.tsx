import React, { useEffect, useState } from 'react';
import './JmChart.scss';
import jmChartApi from "./jmChart.api";
import {CelestialObject} from "../../map/jmMap.type";

type JmChartProps = {
  objects: CelestialObject[]
}

function JmChart(props: JmChartProps) {
  const id = 'JmChart';
  const [objects, setObjects]: any[] = useState('');

  useEffect(() => {
    setObjects(props.objects);
    const chart = jmChartApi.initialize(id);
    chart.add(objects);
    return jmChartApi.destroy(id);
  }, [id]);

  return <div className={id}></div>;
}

export default JmChart;
