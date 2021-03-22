import React from 'react';
import './JmAbout.scss';
import JmIcon from "../../../components/JmIcon/JmIcon";
import JmLink from "../../../components/JmLink/JmLink";

function JmAbout() {
  const picSrc = `${process.env.PUBLIC_URL}/assets/about/jakub-matusiak.jpeg`;
  const picAlt = 'Jakub Matusiak';
  const icon = {
    professionalInterests: 'work',
    languages: 'language',
    characteristics: 'build',
    privateInterests: 'home',
    links: 'link'
  };
  const iconSize = '18px';
  return (
    <section className="JmAbout">
      <h3>About and Beyound</h3>
      <article>
        <div className="JmAbout-text JmAbout-professional">
          <header>
            <JmIcon icon={icon.professionalInterests} fontSize={iconSize}/>
            <h4>Professional interests:</h4>
          </header>
          <ul>
            <li>Modern web development</li>
            <li>Visualizing geospatial data</li>
            <li>Maps, cartography, GIS</li>
          </ul>
        </div>
        <div className="JmAbout-text JmAbout-language">
          <header>
            <JmIcon icon={icon.languages} fontSize={iconSize}/>
            <h4>Languages:</h4>
          </header>
          <ul>
            <li>English (fluent)</li>
            <li>Dutch (basic)</li>
            <li>Polish (native)</li>
          </ul>
        </div>
        <div className="JmAbout-text JmAbout-characteristics">
          <header>
            <JmIcon icon={icon.characteristics} fontSize={iconSize}/>
            <h4>Characteristics:</h4>
          </header>
          <ul>
            <li>Patience and motivation</li>
            <li>Creativity and precision</li>
            <li>Spatial and cartographic sense</li>
          </ul>
        </div>
        <div className="JmAbout-text JmAbout-private">
          <header>
            <JmIcon icon={icon.privateInterests} fontSize={iconSize}/>
            <h4>Private interests:</h4>
          </header>
          <ul>
            <li>Urbanism</li>
            <li>Astronomy</li>
            <li>Tourism</li>
          </ul>
        </div>
        <div className="JmAbout-text JmAbout-links">
          <header>
            <JmIcon icon={icon.links} fontSize={iconSize}/>
            <h4>Links:</h4>
          </header>
          <ul>
            <li><JmLink href="https://www.linkedin.com/in/jakub-matusiak" text="LinkedIn"/></li>
            <li><JmLink href="https://github.com/jakmat" text="Github"/></li>
            <li><JmLink href="https://www.duolingo.com/profile/jakmat87" text="Duolingo"/></li>
          </ul>
        </div>
        <img className="JmAbout-picture" src={picSrc} alt={picAlt}/>
      </article>
    </section>
  );
}

export default JmAbout;
