import React, { useEffect, useState } from 'react';
import JmList from "../../../components/JmList/JmList";
import jmHooks from "../../../components/jmHooks.tsx";

function JmStack(props) {
  const stack = [
    {
      id: '188cd8ec-ff0d-4726-8e62-726552b18fc3',
      startYear: 2014,
      endYear: null,
      name: 'HTML',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/html-jakub-matusiak-geospatial-web-developer.png`,
        height: '160px'
      },
      details: 'HTML5 semantics, SVG'
    },
    {
      id: 'a07218c9-2bd2-49c9-ac4a-abae8d76b011',
      startYear: 2014,
      endYear: null,
      name: 'CSS',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/css-jakub-matusiak-geospatial-web-developer.png`,
        height: '160px'
      },
      details: 'CSS3 animations, Sass, Less, BEM methodology, Bootstrap'
    },
    {
      id: 'ce6888db-89bb-47ea-851b-96c969f08403',
      startYear: 2016,
      endYear: null,
      name: 'JavaScript',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/javascript-jakub-matusiak-geospatial-web-developer.png`,
        height: '160px'
      },
      details: 'ESNext, Vue.js, React, Angular, AngularJS, Node.js'
    },
    {
      id: '882dd3c4-6acd-4f59-a162-edde842e0534',
      startYear: '2017 - 2018, 2021',
      endYear: null,
      name: 'TypeScript',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/typescript-jakub-matusiak-geospatial-web-developer.png`,
        height: '110px'
      },
      details: 'Strong typing in conjunction with Vue, React and Angular'
    },
    {
      id: 'd487badb-1dc1-4f94-ab20-b116947fce95',
      startYear: 2018,
      endYear: null,
      name: 'Vue.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/vue-jakub-matusiak-geospatial-web-developer.png`,
        height: '100px'
      },
      details: 'Vuex, Vuetify'
    },
    {
      id: '9f50c4c8-4e2b-4742-8e95-ff192e75660a',
      startYear: 2020,
      endYear: null,
      name: 'React',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/react-jakub-matusiak-geospatial-web-developer.png`,
        height: '140px'
      },
      details: 'Current page technology'
    },
    {
      id: '88628c18-7756-425e-adc4-ce4a2079c3a6',
      startYear: 2017,
      endYear: 2018,
      name: 'Angular',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/angular-jakub-matusiak-geospatial-web-developer.png`,
        height: '160px'
      },
      details: 'Angular 2, TypeScript'
    },
    {
      id: '34d6216a-6312-4c59-90dd-b5d9bbd822ef',
      startYear: 2020,
      endYear: null,
      name: 'AngularJS',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/angularjs-jakub-matusiak-geospatial-web-developer.png`,
        height: '160px'
      },
      details: 'Decomissioning legacy codebase'
    },
    {
      id: '0f79b0a7-f05f-4efa-9685-c948d4391b36',
      startYear: 2018,
      endYear: null,
      name: 'Cesium.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/cesium-jakub-matusiak-geospatial-web-developer.png`,
        width: '120px'
      },
      details: '3D map library'
    },
    {
      id: 'd43a2295-daa4-4a70-90b0-6bd207639621',
      startYear: 2020,
      endYear: null,
      name: 'Leaflet.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/leaflet-jakub-matusiak-geospatial-web-developer.png`,
        width: '160px'
      },
      details: '2D map library'
    },
    {
      id: '82019624-7919-4442-92a3-e3d782eebaec',
      startYear: 2019,
      endYear: null,
      name: 'D3.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/d3-jakub-matusiak-geospatial-web-developer.png`,
        width: '140px'
      },
      details: 'SVG chart library'
    },
    {
      id: 'a51ed623-0f7c-4f37-bd83-0844006bdf93',
      startYear: 2019,
      endYear: null,
      name: 'AG Grid',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/aggrid-jakub-matusiak-geospatial-web-developer.webp`,
        width: '160px'
      },
      details: 'Tabular, interactive information visualization'
    },
    {
      id: '5525760f-f5fc-4a98-857b-67110f4481d9',
      startYear: 2018,
      endYear: null,
      name: 'Lodash',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/lodash-jakub-matusiak-geospatial-web-developer.png`,
        width: '100px'
      },
      details: 'JavaScript utils library'
    },
    {
      id: 'fbd62892-765e-493a-b113-bee9f0d603b9',
      startYear: 2017,
      endYear: null,
      name: 'npm',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/npm-jakub-matusiak-geospatial-web-developer.png`,
        width: '160px'
      },
      details: 'Node Package Manager'
    },
    {
      id: '49312637-66bc-4e51-8b41-ab754c87707c',
      startYear: 2017,
      endYear: null,
      name: 'Webpack',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/webpack-jakub-matusiak-geospatial-web-developer.png`,
        width: '120px'
      },
      details: 'Module bundler'
    },
    {
      id: '456d6438-c47c-4df3-8741-2a5704d0c0b7',
      startYear: 2018,
      endYear: null,
      name: 'ESLint',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/eslint-jakub-matusiak-geospatial-web-developer.png`,
        width: '160px'
      },
      details: 'Automated code quality assurance'
    },
    {
      id: '06ab0276-0498-4602-924c-bbca9fe3bd27',
      startYear: 2017,
      endYear: null,
      name: 'Emmet',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/emmet-jakub-matusiak-geospatial-web-developer.png`,
        width: '120px'
      },
      details: 'HTML markup assistance'
    },
    {
      id: '92e9fa60-c917-4338-a917-27fdb3f44d3c',
      startYear: 2017,
      endYear: null,
      name: 'Git',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/git-jakub-matusiak-geospatial-web-developer.png`,
        width: '140px'
      },
      details: 'Version control'
    },
    {
      id: 'b4c94fe1-3a7a-46f6-9f02-19efc96b2430',
      startYear: 2021,
      endYear: null,
      name: 'Docker',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/docker-jakub-matusiak-geospatial-web-developer.png`,
        width: '120px'
      },
      details: 'Docker, Docker-compose'
    },
    {
      id: '3dce4f1a-1c73-4f99-90ef-437ca841c4c9',
      startYear: 2018,
      endYear: null,
      name: 'Jenkins',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/jenkins-jakub-matusiak-geospatial-web-developer.png`,
        height: '160px'
      },
      details: 'Continuous Integration'
    },
    {
      id: '9d68a76b-33ef-4012-9018-c01cec973a3b',
      startYear: 2019,
      endYear: null,
      name: 'Postman',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/postman-jakub-matusiak-geospatial-web-developer.png`,
        width: '180px'
      },
      details: 'Inspecting query parameters and payloads'
    },
    {
      id: '4d7ef5a4-605d-426b-bbcd-79f7abb2be9e',
      startYear: 2017,
      endYear: null,
      name: 'Ubuntu',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/ubuntu-jakub-matusiak-geospatial-web-developer.png`,
        width: '140px'
      },
      details: 'Operation System'
    },
    {
      id: '5cedb215-59e5-4ba8-8e7c-22f5be8fe2ad',
      startYear: 2020,
      endYear: null,
      name: 'PyCharm',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/pycharm-jakub-matusiak-geospatial-web-developer.png`,
        width: '120px'
      },
      details: 'Integrated Development Environment'
    },
    {
      id: 'ba5b381b-a705-42ea-9f3c-7fe3b87c1a39',
      startYear: 2020,
      endYear: null,
      name: 'Jira',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/jira-jakub-matusiak-geospatial-web-developer.png`,
      },
      details: 'Task Management Tool'
    },
    {
      id: '58d6d3cd-49a9-4718-a2d1-79b46c19c42d',
      startYear: 2020,
      endYear: null,
      name: 'Python',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/python-jakub-matusiak-geospatial-web-developer.png`,
        width: '140px'
      },
      details: 'Flask APIs, Skyfield'
    },
    {
      id: 'edce3fbc-4cac-4596-918b-eb470f6d31af',
      startYear: 2011,
      endYear: 2017,
      name: 'SQL',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/sql-jakub-matusiak-geospatial-web-developer.png`,
        width: '100px'
      },
      details: 'Oracle SQL Modeller, Oracle SQL Developer'
    },
    {
      id: 'cb085da3-4c05-4bd6-8ea8-40eff973d25e',
      startYear: 2009,
      endYear: null,
      name: 'GIS',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/gis-jakub-matusiak-geospatial-web-developer.png`,
      },
      details: 'ArcGIS, MapInfo, QGIS, digital cartography and spatial queries'
    }
  ];
  const [visibility, setVisibility] = useState(jmHooks.useVisibility('stack', props.view.id));
  useEffect(() => {
     const updatedVisibility = jmHooks.useVisibility('stack', props.view.id);
     setVisibility(updatedVisibility);
  }, [props.view]);
  return (
    <section className="JmStack" style={visibility}>
      <h3>My stack comprises technologies for Modern Frontend Development and Visualizing Geospatial Data on Maps.</h3>
      <JmList items={stack}/>
    </section>
  );
}

export default JmStack;