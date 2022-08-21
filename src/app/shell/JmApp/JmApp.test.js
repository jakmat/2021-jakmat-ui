import React from 'react';
import JmApp from './JmApp.tsx';
import {createRoot} from "react-dom/client";

describe('JmApp', () => {
  it('renders without crashing.', () => {
    const container = document.createElement('div');
    const root = createRoot(container)
    root.render(<JmApp/>);
    root.unmount();
  });
});