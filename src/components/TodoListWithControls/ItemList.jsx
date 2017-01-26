import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoShape } from '../../model/Todo';

function ItemList({ itemUpdate, items }) {
  return (
    <div>
      {items.map(item =>
        <div key={item.id}>
          <TodoItem item={item} onChange={itemUpdate} />
        </div>
      )}
    </div>
  );
}

ItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape(TodoShape)).isRequired,
  itemUpdate: React.PropTypes.func.isRequired
};

export default ItemList;
