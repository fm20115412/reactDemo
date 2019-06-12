import {combineReducers} from 'redux';
import list, { loadArticles } from '../components/Home/PreviewListRedux';

export default combineReducers({
    list,
});

export const listActions = {
    loadArticles,
};
