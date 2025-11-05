import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "aos/dist/aos.css"; // AOS stylesheet
import AOS from "aos";

// AOS init
AOS.init({
  duration: 1000, // animatsiya davomiyligi (ms)
  once: true,     // faqat bir marta animatsiya bo‘lsin
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
