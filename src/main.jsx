import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import ModalContextProvider from './components/store/ModalContext.jsx';
import { DashboardProvider } from './components/store/DashboardContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardProvider>
    <ModalContextProvider>
    <App />
    </ModalContextProvider>
    </DashboardProvider>
  </React.StrictMode>,
)
