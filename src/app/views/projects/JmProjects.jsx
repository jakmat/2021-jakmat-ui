import React from 'react';
import JmList from "../../../components/JmList/JmList";

function JmProjects() {
  // { id: '', startYear: null, endYear: null, name: '', avatar: '', details: '' }
  const projects = [
    { id: 1, startYear: 2020, endYear: null, name: 'Personal Website 2.0', avatar: 'jakmat-webdev-2.png', details: 'React-powered personal landing page and UI/API development lab' },
    { id: 2, startYear: 2018, endYear: null, name: 'Leica ConX 3D', avatar: 'leica.png', details: '3D map-centered app for managing construction site workflows' },
    { id: 3, startYear: 2018, endYear: 2020, name: 'Personal Website 1.0', avatar: 'jakmat-webdev-1', details: 'Vue-powered personal landing page and UI/API development lab' },
    { id: 4, startYear: 2017, endYear: 2018, name: 'Polcode', avatar: 'polcode.png', details: 'Multiple frontend assignments (software house)' },
    { id: 5, startYear: 2017, endYear: 2017, name: 'Wytwórnia Opakowań Foliowych', avatar: 'opakowania-wof.png', details: 'Landing page for local foil package factory' },
    { id: 6, startYear: 2016, endYear: 2016, name: 'Retkiński Kebab', avatar: 'retkinski-kebab.png', details: 'Landing page for local Pakistani restaurant' },
    { id: 7, startYear: 2014, endYear: 2017, name: 'MOJA SOJA', avatar: 'moja-soja.png', details: 'Personal e-commerce for own branded soybean/plant beverage makers' },
    { id: 8, startYear: 2011, endYear: 2017, name: 'Emapa', avatar: 'emapa.png', details: 'GIS development of maps for car and tourist navigations' }
  ];
  return (
    <article className="JmProjects">
      <h3>Projects</h3>
      <JmList items={projects}/>
    </article>
  );
}

export default JmProjects;
