import { combineReducers } from 'redux';
import todosReducer from './todo/reducer.js';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
