import { connect } from 'react-redux';
import TodoEditBlock from './TodoEditBlock';
import { setFormText, setFormVisible } from '../../redux/todoUI.actions';
import { createTodoAction } from '../../redux/todoList.actions';

function mapStateToProps(state) {
  return state.todoUI.form;
}

function mapDispatchToProps(dispatch) {
  return {
    onSave: text => dispatch(createTodoAction(text)),
    setFormVisible: value => dispatch(setFormVisible(value)),
    setFormText: text => dispatch(setFormText(text))
  };
}

const TodoEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoEditBlock);

export default TodoEditContainer;
