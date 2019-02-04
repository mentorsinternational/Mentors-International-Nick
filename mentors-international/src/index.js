import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './store/reducers';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));