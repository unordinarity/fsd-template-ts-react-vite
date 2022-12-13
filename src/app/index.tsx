import { createInspector } from 'effector-inspector';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import './index.css';

const reactRoot = createRoot(document.getElementById('root')!);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

createInspector();
