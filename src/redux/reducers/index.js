
import { combineReducers } from 'redux';
import toDoReducer from './toDo';

const reducers = {
    toDoReducer,
};

export default combineReducers(reducers);