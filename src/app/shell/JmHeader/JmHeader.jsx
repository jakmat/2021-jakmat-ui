import React from 'react';
import './JmHeader.scss';

function JmHeader() {
  const logoSrc = `${process.env.PUBLIC_URL}/assets/jakmat-jakub-matusiak-geospatial-web-developer.png`;
  const logoAlt = 'Jakub Matusiak Geospatial Web Developer logo';
  return (
    <header className="JmHeader">
      <img className="JmHeader-logo" src={logoSrc} alt={logoAlt}/>
      <div className="JmHeader-headline">
        <h1 className="JmHeader-title">Jakub Matusiak</h1>
        <h2 className="JmHeader-subtitle">Geospatial Web Developer</h2>
      </div>
    </header>
  );
}

export default JmHeader;
