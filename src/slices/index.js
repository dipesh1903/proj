import { combineReducers, Reducer } from 'redux'

import listDataReducer from './List';

export default combineReducers({
	listDataReducer : listDataReducer
});