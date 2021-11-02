import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import topHeadlinesReducer from './topHeadlinesReducer';

export default combineReducers({
	articles: articlesReducer,
	headlines: topHeadlinesReducer
});