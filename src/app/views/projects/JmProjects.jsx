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
        src: `${process.env.PUBLIC_URL}/assets/projects/jakmat-logo.png`,
        width: '',
        height: ''
      },
      details: 'React-powered personal website and development lab',
      url: {
        text: 'You are Here :)',
        href: ''
      }
    },
    {
      id: 2,
      type: 'Full time job',
      startYear: 2018,
      endYear: null,
      name: 'Leica ConX 3D',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/leica-geosystems.jpg`,
        width: '',
        height: ''
      },
      details: '3D map-centered app for managing construction site workflows',
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
        src: `${process.env.PUBLIC_URL}/assets/projects/jakmat-logo.png`,
        width: '',
        height: ''
      },
      details: 'Vue-powered personal personal website and development lab',
      url: {
        text: 'Go to Website',
        href: 'https://www.jakubmatusiak.com'
      }
    },
    {
      id: 4,
      type: 'Full time job',
      startYear: 2017,
      endYear: 2018,
      name: 'Polcode',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/polcode.jpg`,
        width: '',
        height: ''
      },
      details: 'Multiple frontend assignments',
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
      name: 'Wytwórnia Opakowań Foliowych',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/opakowania-wof.png`,
        width: '200px',
        height: '200px'
      },
      details: 'Landing page for foil package factory',
      url: {
        text: 'Go to Website',
        href: 'http://www.opakowania-wof.pl'
      }
    },
    {
      id: 6,
      type: 'Freelance',
      startYear: 2016,
      endYear: 2016,
      name: 'Retkiński Kebab',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/retkinski-kebab.png`,
        width: '',
        height: ''
      },
      details: 'Landing page for Pakistani restaurant',
      url: {
        text: 'Go to Website',
        href: 'http://www.jakmat.ayz.pl/kebab'
      }
    },
    {
      id: 7,
      type: 'E-commerce',
      startYear: 2014,
      endYear: 2017,
      name: 'MOJA SOJA',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/moja-soja.png`,
        width: '',
        height: ''
      },
      details: 'Own-branded soybean milk maker home appliance store',
      url: {
        text: 'Go to Wayback Machine',
        href: 'https://web.archive.org/web/2015*/mojasoja.pl'
      }
    },
    {
      id: 8,
      type: 'Full time job',
      startYear: 2011,
      endYear: 2017,
      name: 'Emapa',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/emapa.png`,
        width: '180px',
        height: ''
      },
      details: 'GIS development of maps for driver and tourist navigations',
      url: {
        text: 'Go to Map',
        href: 'http://www.emapi.pl/'
      }
    }
  ];
  return (
    <article className="JmProjects">
      <h3>Jobs and Projects</h3>
      <JmList items={projects}/>
    </article>
  );
}

export default JmProjects;
