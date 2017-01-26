import React from 'react';
import './App.css';
import TodoListWithControls from '../TodoListWithControls/TodoListWithControls';

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Todo app on React</h1>
      </div>
      <TodoListWithControls />
    </div>
  );
}
