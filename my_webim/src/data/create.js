import {compose,combineReducers,applyMiddleware,createStore} from 'redux';

import reducer from './reducers'

const middlewares = [];

const store = createStore(reducer,applyMiddleware(middlewares));

export default store;