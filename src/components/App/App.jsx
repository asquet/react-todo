import React from 'react';
import './App.css';
import TodoFilterContainer from '../Filter/TodoFilterContainer';
import TodoEditContainer from '../TodoEditBlock/TodoEditContainer';
import TodoVisibleListContainer from '../TodoList/TodoVisibleListContainer';

export default function App() {
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
