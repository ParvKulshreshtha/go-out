import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { DisplayPage } from './components/Display Page/DisplayPage';

store.subscribe(() => console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router> 
      <Routes>
        <Route exact path="/" element={<App />} />  
        <Route path="/:service" element={<DisplayPage />} />  
      </Routes>
  </Router>  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
