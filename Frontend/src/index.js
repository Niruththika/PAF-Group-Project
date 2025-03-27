import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  // Import reportWebVitals
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain = "dev-bnkl8rttg0wau7tc.us.auth0.com"
  clientId = "eK9tOjddQrcbHI6jYVV3o2SdNblEOBrf"
  redirectUri = {window.location.origin}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

// Call reportWebVitals if you want to track performance
reportWebVitals();
