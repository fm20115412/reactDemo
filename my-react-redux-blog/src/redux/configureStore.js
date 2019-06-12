import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'react-redux';
import rootReducer from './reducer';

const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware)
)(createStore)

const reducer = combineReducers(Object.assign({},rootReducer,{
    rooting : rootReducer
}))

export default function configureStore(initState){
    const store = finalCreateStore(reducer,initState);
    return store;
}

