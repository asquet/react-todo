import { connect } from 'react-redux';
import TodoFilter from './TodoFilter';
import { setFilterAction } from '../../redux/todoUI.actions';

function mapStateToProps(state) {
  return {
    visibilityFilter: state.todoUI.visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (filter) => {
      dispatch(setFilterAction(filter));
    }
  };
}

const TodoFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter);

export default TodoFilterContainer;
