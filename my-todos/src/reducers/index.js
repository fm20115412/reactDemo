import { combineReducers } from 'redux';
import todos from './dealTodo';
import toggleShow from './toggleShow';

const resultReducers = combineReducers({
    todos,
    toggleShow
})
export default resultReducers

