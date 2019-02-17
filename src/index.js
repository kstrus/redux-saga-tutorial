import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import rootSaga from './sagas';
import App from './components/App';

axios.defaults.baseURL = 'http://localhost:3001';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
