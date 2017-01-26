import { combineReducers } from 'redux';
import { VISIBILITY_FILTER_VALUES } from '../../model/Todo';
import { SET_FILTER, SET_FORM_VISIBLE, SET_FORM_TEXT } from '../todoUI.actions';

function visibilityFilter(state = VISIBILITY_FILTER_VALUES.NOT_DONE, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}


function form(state = { formText: '', isFormVisible: false }, action) {
  switch (action.type) {
    case SET_FORM_TEXT:
      return Object.assign({}, state, { formText: action.payload });
    case SET_FORM_VISIBLE:
      return Object.assign({}, state, { isFormVisible: action.payload });
    default:
      return state;
  }
}

const todoUI = combineReducers({
  form,
  visibilityFilter
});


export default todoUI;
