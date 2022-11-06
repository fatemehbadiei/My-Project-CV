import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
// setTimeout(()=>{
//     window.AOS.refresh();
// },2000)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

