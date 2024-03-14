import React from 'react';
import { createRoot } from 'react-dom/client';
import DevelopmentTool from './lib/DevelopmentToolComponent'; // I
import './style.css'

// Create a root for rendering your application
const root = createRoot(document.getElementById('root'));

// Render your application inside the root
root.render(
  <React.StrictMode>
    <DevelopmentTool />
  </React.StrictMode>
);