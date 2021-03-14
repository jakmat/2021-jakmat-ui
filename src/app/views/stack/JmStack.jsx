import React from 'react';
import JmList from "../../../components/JmList/JmList";

function JmStack() {
  const stack = [
    {
      id: 1,
      startYear: 2014,
      endYear: null,
      name: 'HTML',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/html.png`,
        height: '160px'
      },
      details: 'HTML5 semantics, SVG'
    },
    {
      id: 2,
      startYear: 2014,
      endYear: null,
      name: 'CSS',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/css.png`,
        height: '160px'
      },
      details: 'CSS3 animations, Sass, Less, BEM methodology, Bootstrap'
    },
    {
      id: 3,
      startYear: 2016,
      endYear: null,
      name: 'JavaScript',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/java-script.png`,
        height: '160px'
      },
      details: 'ESNext, Vue.js, React, Angular, AngularJS, Node.js'
    },
    {
      id: 4,
      startYear: 2018,
      endYear: null,
      name: 'Vue.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/vue.png`,
        height: '100px'
      },
      details: 'Vuex, Vuetify'
    },
    {
      id: 5,
      startYear: 2020,
      endYear: null,
      name: 'React',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/react.png`,
        height: '140px'
      },
      details: 'Current page technology'
    },
    {
      id: 6,
      startYear: 2017,
      endYear: 2018,
      name: 'Angular',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/angular.png`,
        height: '160px'
      },
      details: 'Angular 2, TypeScript'
    },
    {
      id: 7,
      startYear: 2017,
      endYear: null,
      name: 'npm',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/npm.png`,
        width: '160px'
      },
      details: 'Node Package Manager'
    },
    {
      id: 8,
      startYear: 2017,
      endYear: null,
      name: 'Webpack',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/webpack.png`,
        width: '120px'
      },
      details: 'Module bundler'
    },
    {
      id: 9,
      startYear: 2018,
      endYear: null,
      name: 'ESLint',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/eslint.png`,
        width: '160px'
      },
      details: 'Automated code quality assurance'
    },
    {
      id: 9,
      startYear: 2017,
      endYear: null,
      name: 'Emmet',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/emmet.png`,
        width: '120px'
      },
      details: 'HTML markup assistance'
    },
    {
      id: 10,
      startYear: 2018,
      endYear: null,
      name: 'Cesium.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/cesium.png`,
        width: '120px'
      },
      details: '3D map library'
    },
    {
      id: 11,
      startYear: 2020,
      endYear: null,
      name: 'Leaflet.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/leaflet.png`,
        width: '160px'
      },
      details: '2D map library'
    },
    {
      id: 12,
      startYear: 2018,
      endYear: null,
      name: 'Lodash',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/lodash.png`,
        width: '140px'
      },
      details: 'JavaScript utils library'
    },
    {
      id: 13,
      startYear: 2019,
      endYear: null,
      name: 'D3.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/d3.png`,
        width: '140px'
      },
      details: 'SVG chart library'
    },
    {
      id: 14,
      startYear: 2018,
      endYear: 2020,
      name: 'Moment.js',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/moment.png`,
        width: '120px'
      },
      details: 'Date/time library'
    },
    {
      id: 15,
      startYear: 2017,
      endYear: null,
      name: 'Git',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/git.png`,
        width: '140px'
      },
      details: 'Version control'
    },
    {
      id: 16,
      startYear: 2017,
      endYear: null,
      name: 'Ubuntu',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/ubuntu.png`,
        width: '140px'
      },
      details: 'Operation System'
    },
    {
      id: 17,
      startYear: 2020,
      endYear: null,
      name: 'PyCharm',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/pycharm.png`,
        width: '120px'
      },
      details: 'Integrated Development Environment'
    },
    {
      id: 18,
      startYear: 2020,
      endYear: null,
      name: 'Jira',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/jira.png`,
      },
      details: 'Task Management Tool'
    },
    {
      id: 19,
      startYear: 2018,
      endYear: null,
      name: 'Jenkins',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/jenkins.png`,
        height: '160px'
      },
      details: 'Continuous Integration'
    },
    {
      id: 20,
      startYear: 2019,
      endYear: null,
      name: 'Postman',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/postman.png`,
        width: '180px'
      },
      details: 'Inspecting query parameters and payloads'
    },
    {
      id: 21,
      startYear: 2020,
      endYear: null,
      name: 'Python',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/python.png`,
        width: '140px'
      },
      details: 'Flask APIs, Skyfield'
    },
    {
      id: 22,
      startYear: 2011,
      endYear: 2017,
      name: 'SQL',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/sql.png`,
        width: '100px'
      },
      details: 'Oracle SQL Modeller, Oracle SQL Developer'
    },
    {
      id: 23,
      startYear: 2009,
      endYear: null,
      name: 'GIS',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/stack/gis.png`,
      },
      details: 'ArcGIS, MapInfo, QGIS, digital cartography and spatial queries'
    }
  ];
  return (
    <section className="JmStack">
      <h3>Technologies and Tools</h3>
      <JmList items={stack}/>
    </section>
  );
}

export default JmStack;