import React, { Component } from 'react';
import logo from './assets/jakmat-logo.png';
import './JmApp.scss';
import CopyrightIcon from '@material-ui/icons/Copyright';

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
          <CopyrightIcon className="JmApp-footer__icon" style={{ fontSize: '1em' }}/>
          <span>2021 jakmat</span>
        </footer>
      </div>
    );
  }
}

export default JmApp;
