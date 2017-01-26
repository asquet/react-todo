import React from 'react';

function FilterItem({ value, onChange, selected, children }) {
  return (
    <label htmlFor={`filter-${value}`}>
      <input
        type="radio"
        id={`filter-${value}`}
        value={value}
        onChange={() => onChange(value)}
        checked={selected === value}
      />
      {children}
    </label>
  );
}

FilterItem.propTypes = {
  value: React.PropTypes.string.isRequired,
  selected: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  children: React.PropTypes.node
};

FilterItem.defaultProps = {
  children: ''
};

export default FilterItem;
