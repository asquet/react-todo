import { connect } from 'react-redux';
import ItemList from './ItemList';
import { updateTodoAction } from '../../redux/todoList.actions';
import { VISIBILITY_FILTER_VALUES } from '../../model/Todo';

function filterTodoList(todoList, filter) {
  if (filter === VISIBILITY_FILTER_VALUES.ALL) {
    return todoList;
  }
  return todoList.filter(item => item.isDone === (filter === VISIBILITY_FILTER_VALUES.DONE));
}

function mapDispatchToProps(dispatch) {
  return {
    itemUpdate: (id, isDone) => {
      dispatch(updateTodoAction({ id, isDone }));
    }
  };
}

function mapStateToProps(state) {
  return {
    items: filterTodoList(state.todoList, state.todoUI.visibilityFilter)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
