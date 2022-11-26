import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import JmApp from "./app/shell/JmApp/JmApp";

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<JmApp/>);