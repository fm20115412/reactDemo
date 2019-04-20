import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker'; 
import { createStore, applyMiddleware } from 'redux';
import resultReducer from './reducers'

function logger({dispatch,getState}){
    return function(next){
        return function(action){
            console.log('action is ',action)
            return next(action)
        }
    }
}
function nextone({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            console.log('enter next middleware', action)
            return next(action)
        }
    }
}
// let store = createStore(resultReducer, applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let store = createStore(resultReducer, applyMiddleware(logger, nextone));

console.log('init state is ',store.getState());
function render(){
    ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
}
render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
