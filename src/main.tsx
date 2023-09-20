import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import UseNewsProvider from './context/NewsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UseNewsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UseNewsProvider>,
);
