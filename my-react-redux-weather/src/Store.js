import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import storage from './middlewares/storage'

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk,storage)
);

let initData = { status: 'loading', locations: [] };
if(window.sessionStorage.getItem('locations')){
    initData = {
        status:'success',
        locations: JSON.parse(window.sessionStorage.getItem('locations'))
    }
    
}
export default createStore(reducer, initData,enhancer);