import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import configureStore from './core/store/configureStore';

import './styles/index.css';
import './styles/layout.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
