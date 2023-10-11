import { createRoot } from 'react-dom/client';
import './index.scss';
import JmApp from "./shell/JmApp/JmApp";
import React from 'react';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<JmApp/>);