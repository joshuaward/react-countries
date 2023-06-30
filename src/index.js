import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/index.scss';

import { CountriesProvider } from './context/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CountriesProvider>
    <App />
  </CountriesProvider>
);
