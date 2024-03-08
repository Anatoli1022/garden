import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
