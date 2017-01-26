import { combineReducers } from 'redux';
import todoList from './todoList';
import todoUI from './todoUI';

export default combineReducers({
  todoList,
  todoUI
});
