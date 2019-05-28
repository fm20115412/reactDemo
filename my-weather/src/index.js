import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Storage from './api/storage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
var storage = new Storage();

async function fetchInitData() {
    await storage.fetchData();
    let initData = storage.data;
    store.dispatch({
        type: 'INIT_LOCATION',
        payload: initData,
    })
}

let initData = {
    locations: [],
    isDataLoaded: false
}
var store = createStore(reducer, initData,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

fetchInitData();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
