import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ViewContextProvider } from './ViewContext'
import { BreakpointProvider } from 'react-socks'

ReactDOM.render(
  <React.StrictMode>
    <ViewContextProvider>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </ViewContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);