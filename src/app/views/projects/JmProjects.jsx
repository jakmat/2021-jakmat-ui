import React from 'react';
import JmList from "../../../components/JmList/JmList";

function JmProjects() {
  const projects = [
    {
      id: 1,
      type: 'Project',
      startYear: 2020,
      endYear: null,
      name: 'Personal Website 2.0',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/jakmat-logo.png`
      },
      details: 'Personal website and development lab. React.',
      url: {
        text: 'Current Website',
        href: 'https://www.jakubmatusiak.com'
      }
    },
    {
      id: 2,
      type: 'Full time job',
      startYear: 2018,
      endYear: null,
      name: 'Leica ConX 3D',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/leica-geosystems.jpg`
      },
      details: '3D map app for managing construction site workflows. Vue, Cesium, D3.',
      url: {
        text: 'Watch App Demo',
        href: 'https://www.youtube.com/watch?v=jKMocAxeqfQ'
      }
    },
    {
      id: 3,
      type: 'Project',
      startYear: 2018,
      endYear: 2020,
      name: 'Personal Website 1.0',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/jakmat-logo.png`
      },
      details: 'Pesonal personal website and development lab. Vue.',
      url: {
        text: 'Go to Website',
        href: 'http://www.jakubmatusiak.com/jakmat-v1'
      }
    },
    {
      id: 4,
      type: 'Full time job',
      startYear: 2017,
      endYear: 2018,
      name: 'Polcode',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/polcode.jpg`
      },
      details: 'Multiple frontend assignments. Angular, PHP.',
      url: {
        text: 'Software House',
        href: ''
      }
    },
    {
      id: 5,
      type: 'Freelance',
      startYear: 2017,
      endYear: 2017,
      name: 'Magda Skibka PR Consulting',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/plndesign.png`
      },
      details: 'Landing page for PR specialist. HTML, PHP.',
      url: {
        href: 'http://www.jakubmatusiak.com/ms/',
        text: 'Go to archived page'
      }
    },
    {
      id: 6,
      type: 'E-commerce',
      startYear: 2014,
      endYear: 2017,
      name: 'MOJA SOJA',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/moja-soja.png`
      },
      details: 'Own-branded soybean milk maker home appliance store. Prestashop CMS.',
      url: {
        href: 'http://www.jakubmatusiak.com/mojasoja/',
        text: 'Go to archived Allegro template'
      }
    },
    {
      id: 7,
      type: 'Full time job',
      startYear: 2011,
      endYear: 2017,
      name: 'Emapa',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/emapa.png`,
        width: '180px'
      },
      details: 'Development of maps for driver and tourist navigations. GIS, SQL.',
      url: {
        text: 'Go to contributed Map',
        href: 'http://www.emapi.pl/'
      }
    }
  ];
  return (
    <section className="JmProjects">
      <h3>Jobs and Projects</h3>
      <JmList items={projects}/>
    </section>
  );
}

export default JmProjects;
