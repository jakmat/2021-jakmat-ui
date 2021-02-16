import React, { Component } from 'react';
import logo from './assets/jakmat-logo.png';
import './JmApp.scss';

class JmApp extends Component {
  render() {
    return (
      <div className="JmApp">
        <header className="JmApp-header">
          <img src={logo} className="JmApp-logo" alt="logo" />
          <div className="JmApp-headline">
            <h1 className="JmApp-title">Jakub Matusiak</h1>
            <h2 className="JmApp-subtitle">Geospatial Web Developer</h2>
          </div>
        </header>
        <nav className="JmApp-nav">
          {/*Navigation*/}
        </nav>
        <main className="JmApp-main">
          {/*Content*/}
        </main>
        <footer className="JmApp-footer">
          <span>jakmat 2021</span>
        </footer>
      </div>
    );
  }
}

export default JmApp;
