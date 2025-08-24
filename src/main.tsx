import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;
    navigator.serviceWorker.register(swUrl )
    .then(reg => {
      console.log('Service worker registered.', reg);
    });
  });
}
