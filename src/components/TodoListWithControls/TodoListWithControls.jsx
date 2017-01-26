import React from 'react';
import TodoFilterContainer from '../Filter/TodoFilterContainer';
import TodoEditContainer from '../TodoEditBlock/TodoEditContainer';
import TodoVisibleListContainer from './TodoVisibleListContainer';

function TodoListWithControls() {
  return (
    <div>
      <TodoFilterContainer />
      <TodoVisibleListContainer />
      <TodoEditContainer />
    </div>
  );
}

export default TodoListWithControls;
