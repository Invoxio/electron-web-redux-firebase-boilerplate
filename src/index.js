import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.css';
import reducers from "./reducers";

import Dashboard from "./containers/Dashboard";

import configureStore from './store';
import createHistory from 'history/createBrowserHistory';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
registerServiceWorker();
