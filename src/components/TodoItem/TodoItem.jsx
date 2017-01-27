import React from 'react';
import './TodoItem.css';
import { TodoShape } from '../../model/Todo';

function TodoItem({ item, onChange }) {
  const htmlId = `todoCheckBox-${item.id}`;
  return (
    <div className="TodoItem panel panel-default">
      <div className="checkbox panel-body">
        <label htmlFor={htmlId}>
          <input
            id={htmlId}
            type="checkbox"
            checked={item.isDone}
            onChange={() => onChange(item.id, !item.isDone)}
          />
          <span className="TodoItem-text">{item.text}</span>
        </label>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  item: React.PropTypes.shape(TodoShape).isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default TodoItem;
