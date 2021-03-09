import React from 'react';
import JmList from "../../../components/JmList/JmList";

function JmStack() {
   // { id: '', startYear: null, endYear: null, name: '', avatar: '', details: '' }
  const stack = [
    { id: 1, startYear: 2014, endYear: null, name: 'HTML', avatar: 'html.png', details: 'HTML5 semantics, SVG' },
    { id: 2, startYear: 2014, endYear: null, name: 'CSS', avatar: 'css.png', details: 'CSS3 animations, Sass, Less, BEM methodology, Bootstrap' },
    { id: 3, startYear: 2016, endYear: null, name: 'JavaScript', avatar: 'javascript.png', details: 'ESNext, Vue.js, React, Angular, AngularJS, Node.js' },
    { id: 4, startYear: 2018, endYear: null, name: 'Vue.js', avatar: 'vue.png', details: 'Vuex, Vuetify' },
    { id: 5, startYear: 2020, endYear: null, name: 'React', avatar: 'react.png', details: 'Current page technology' },
    { id: 6, startYear: 2017, endYear: 2018, name: 'Angular', avatar: 'angular.png', details: 'Angular 2, TypeScript' },
    { id: 7, startYear: 2017, endYear: null, name: 'npm', avatar: 'npm.png', details: 'Package archipelago' },
    { id: 8, startYear: 2017, endYear: null, name: 'Webpack', avatar: 'webpack.png', details: 'Bundling, ENVing, http proxying' },
    { id: 9, startYear: 2018, endYear: null, name: 'ESLint', avatar: 'eslint.png', details: 'Automated code quality assurance' },
    { id: 10, startYear: 2018, endYear: null, name: 'Cesium.js', avatar: 'cesium.png', details: '3D map library' },
    { id: 11, startYear: 2020, endYear: null, name: 'Leaflet.js', avatar: 'leaflet.png', details: '2D map library' },
    { id: 12, startYear: 2018, endYear: null, name: 'Lodash', avatar: 'lodash.png', details: 'If only needed' },
    { id: 13, startYear: 2019, endYear: null, name: 'D3.js', avatar: 'd3.png', details: 'SVG chart library' },
    { id: 14, startYear: 2018, endYear: 2020, name: 'Moment.js', avatar: 'moment.png', details: 'Abandoned date/time library' },
    { id: 15, startYear: 2017, endYear: null, name: 'Git', avatar: 'git.png', details: 'Version control' },
    { id: 16, startYear: 2017, endYear: null, name: 'Ubuntu', avatar: 'ubuntu.png', details: 'Operation System' },
    { id: 17, startYear: 2020, endYear: null, name: 'PyCharm', avatar: 'pycharm.png', details: 'Integrated Development Environment' },
    { id: 18, startYear: 2020, endYear: null, name: 'Jira', avatar: 'jira.png', details: 'Task Management Tool' },
    { id: 19, startYear: 2018, endYear: null, name: 'Jenkins', avatar: 'jenkins.png', details: 'Continuous Integration' },
    { id: 20, startYear: 2019, endYear: null, name: 'Postman', avatar: 'postman.png', details: 'Inspecting query parameters and payloads' },
    { id: 21, startYear: 2020, endYear: null, name: 'Python', avatar: 'python.png', details: 'Flask APIs, Skyfield' },
    { id: 22, startYear: 2011, endYear: 2017, name: 'SQL', avatar: 'sql.png', details: 'Oracle SQL Modeller, Oracle SQL Developer' },
    { id: 23, startYear: 2009, endYear: 2017, name: 'GIS', avatar: 'gis.png', details: 'ArcGIS, MapInfo, QGIS, digital cartography and spatial queries' }
  ];
  return (
    <article className="JmStack">
      <h3>Technologies and Tools</h3>
      <JmList items={stack}/>
    </article>
  );
}

export default JmStack;