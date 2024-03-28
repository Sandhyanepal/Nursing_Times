import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import MyRoutes from './MyRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<MyRoutes/>
  </React.StrictMode>
);