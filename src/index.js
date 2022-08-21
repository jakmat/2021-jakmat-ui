import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import JmApp from "./app/shell/JmApp/JmApp.tsx";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<JmApp/>);