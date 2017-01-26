import React from 'react';
import { VISIBILITY_FILTER_VALUES } from '../../model/Todo';
import FilterItem from './FilterItem';

function TodoFilter({ onChange, visibilityFilter }) {
  return (
    <div>
      <FilterItem
        onChange={onChange}
        selected={visibilityFilter}
        value={VISIBILITY_FILTER_VALUES.ALL}
      >
        All
      </FilterItem>
      <FilterItem
        onChange={onChange}
        selected={visibilityFilter}
        value={VISIBILITY_FILTER_VALUES.DONE}
      >
        Done
      </FilterItem>
      <FilterItem
        onChange={onChange}
        selected={visibilityFilter}
        value={VISIBILITY_FILTER_VALUES.NOT_DONE}
      >
        Not done
      </FilterItem>
    </div>);
}

TodoFilter.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  visibilityFilter: React.PropTypes.string.isRequired
};

export default TodoFilter;
