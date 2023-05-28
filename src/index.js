import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Redux Setup
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

const store = configureStore({reducer:rootReducer}, {thunk})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
       <App />
    </Provider>
  </React.StrictMode>
);

