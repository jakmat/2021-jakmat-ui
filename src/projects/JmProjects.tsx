import React from 'react';
import JmList from "../common/components/JmList/JmList";

function JmProjects() {
  const projects = [
    {
      id: 1,
      type: 'Contract',
      startYear: 2023,
      endYear: null,
      name: 'Eloomi Infinite',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/eloomi-jakub-matusiak-geospatial-web-developer.png`,
        width: '140px'
      },
      details: 'E-learning and skills development platform. Vue.',
      url: {
        text: 'Go to website',
        href: 'https://eloomi.com/'
      }
    },
    {
      id: 2,
      type: 'Full time job',
      startYear: 2018,
      endYear: 2023,
      name: 'Leica ConX 3D',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/leica-geosystems-jakub-matusiak-geospatial-web-developer.jpg`
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
      startYear: 2021,
      endYear: null,
      name: 'Personal Website v2.0',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/jakmat-logo-jakub-matusiak-geospatial-web-developer.png`
      },
      details: 'Current personal website and development lab. React.',
      url: {
        text: 'Go to Repository',
        href: 'https://github.com/jakmat/2021-jakmat-ui'
      }
    },
    {
      id: 4,
      type: 'Project',
      startYear: 2018,
      endYear: 2021,
      name: 'Personal Website v1.0',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/jakmat-logo-jakub-matusiak-geospatial-web-developer.png`
      },
      details: 'Archived personal personal website and development lab. Vue.',
      url: {
        text: 'Go to Repository',
        href: 'https://github.com/jakmat/2018-personal-website'
      }
    },
    {
      id: 5,
      type: 'Full time job',
      startYear: 2017,
      endYear: 2018,
      name: 'Polcode',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/polcode-jakub-matusiak-geospatial-web-developer.jpg`
      },
      details: 'Multiple frontend assignments. Angular, PHP.',
      url: {
        text: 'Software House',
      }
    },
    {
      id: 6,
      type: 'Freelance',
      startYear: 2016,
      endYear: 2018,
      name: 'PLN Design Group',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/pln-design-group-jakub-matusiak-geospatial-web-developer.png`
      },
      details: 'Website maintenance works, coding mailing campaigns. HTML, CSS, Wordpress.',
      url: {
        text: 'PR Agency'
      }
    },
    {
      id: 7,
      type: 'E-commerce',
      startYear: 2014,
      endYear: 2017,
      name: 'MOJA SOJA',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/mojasoja-jakub-matusiak-geospatial-web-developer.png`
      },
      details: 'Own-branded soybean milk maker home appliance store. HTML, CSS, Prestashop.',
      url: {
        href: 'http://www.jakubmatusiak.com/mojasoja/',
        text: 'Go to archived Allegro template'
      }
    },
    {
      id: 8,
      type: 'Full time job',
      startYear: 2011,
      endYear: 2017,
      name: 'Emapa',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/emapa-jakub-matusiak-geospatial-web-developer.png`,
        width: '180px'
      },
      details: 'Development of maps for driver and tourist navigations. GIS, SQL.',
      url: {
        text: 'Go to contributed Map',
        href: 'http://www.emapi.pl/'
      }
    },
    {
      id: 9,
      type: 'Internship',
      startYear: 2009,
      endYear: 2009,
      name: 'City of Lodz Office',
      avatar: {
        src: `${process.env.PUBLIC_URL}/assets/projects/lodz-jakub-matusiak-geospatial-web-developer.png`,
      },
      details: 'Urban land use and cadaster database',
      url: {
        text: '',
      }
    }
  ];
  return (
    <section className="JmProjects">
      <h3>Jobs and projects of my career are concerned with Web Development, Mapping and GIS.</h3>
      <JmList items={projects}/>
    </section>
  );
}

export default JmProjects;
