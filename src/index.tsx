import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Diagram from './App'; // We are importing 'Diagram' now
import './style.css';
 
const rootElement = document.getElementById('root');
 
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Diagram /> 
    </StrictMode>
  );
}
 
