// import d3Api from "../../plugins/d3Api.ts";

const jmChartApi = {
  instances: {},
  constructor(id: string) {
    return {
      id,
      options: {},
      chartRoot: null,
      chartElement: null,
      chart: null,
      handlers: {},
      mount() {
        const [chartRoot] = document.getElementsByClassName(this.id);
        this.chartRoot = chartRoot;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.style = { width: '100%', height: '100%' };
        this.chartRoot.appendChild(this.element);
        this.chartElement = this.chartElement;
        this.chart = {}; //d3Api.getChart(this.id, this.options);
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