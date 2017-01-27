import React from 'react';
import TodoFilterContainer from '../Filter/TodoFilterContainer';
import TodoEditContainer from '../TodoEditBlock/TodoEditContainer';
import TodoVisibleListContainer from '../TodoList/TodoVisibleListContainer';

export default function Root() {
  return (
    <div className="App">
      <div className="page-header">
        <h1>Todo app on React</h1>
      </div>
      <TodoFilterContainer />
      <TodoVisibleListContainer />
      <div className="navbar navbar-default navbar-fixed-bottom">
        <div className="navbar-form">
          <TodoEditContainer />
        </div>
      </div>
    </div>
  );
}
