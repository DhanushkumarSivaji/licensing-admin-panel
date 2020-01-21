import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducers from './reducers';
import { Provider } from "react-redux";

axios.defaults.baseURL = 'http://localhost:5000/api';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);



ReactDOM.render(

   <Provider store={store}>
    <App />
  </Provider>

    , document.getElementById('root'));
