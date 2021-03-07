import React from 'react';
import ReactDOM from 'react-dom';
import JmApp from './JmApp.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JmApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
