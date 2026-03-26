




// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import { DarkModeContextProvider } from './context/darkModeContext';
import {MotionConfig} from 'motion/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <DarkModeContextProvider>
          <MotionConfig viewport={{once:true}}>
            <App />
          </MotionConfig>
        </DarkModeContextProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
