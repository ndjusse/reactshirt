import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/reactshirt">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


