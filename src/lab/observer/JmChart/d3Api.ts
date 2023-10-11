import * as d3 from "d3";

type D3ChartType = 'linear';

export interface D3ChartOptions {
  type: D3ChartType;
};

const getChart = (id: string, options: D3ChartOptions) => {
  const { type } = options;
  if (type === 'linear') return d3.scaleLinear();
};

const d3Api = { getChart };

export default d3Api;