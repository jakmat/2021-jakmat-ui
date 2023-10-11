import d3Api, {D3ChartOptions} from "./d3Api";

type JmChart = {
  id: string;
  options: D3ChartOptions;
  chartRoot: Element | null;
  chartElement: Element | null;
  chart: null;
  handlers: Record<string, () => void>
  mount: () => void;
  unmount: () => void;
  add: (items: any) => void;
};

const jmChartApi = {
  instances: {},
  constructor(id: string): JmChart {
    return {
      id,
      options: {
        type: 'linear',

      },
      chartRoot: null,
      chartElement: null,
      chart: null,
      handlers: {},
      mount() {
        const chartRootElements = document.getElementsByClassName(this.id);
        this.chartRoot = chartRootElements[0];
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.style = { width: '100%', height: '100%' };
        this.chartRoot.appendChild(this.element);
        this.chartElement = this.chartElement;
        this.chart = d3Api.getChart(this.id, this.options);
      },
      unmount() {
        this.chart = null;
        this.chartElement = null;
      },
      add(items) {
        console.log(items);
      }
    }
  },
  initialize(id: string) {
    if (!this.instances[id]) {
      this.instances[id] = this.constructor(id);
      this.instances[id].mount();
      return this.instances[id];
    }
    return this.instances[id];
  },
  destroy(id: string) {
    if (this.instances[id]) {
      this.instances[id].unmount();
      delete this.instances[id];
    }
  }
};

export default jmChartApi;