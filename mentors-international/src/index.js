import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';

import history from './history';
import rootReducer from './store/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Router history={history}><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));