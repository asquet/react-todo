import React from 'react';

function FilterItem({ value, onChange, selected, children }) {
  const htmlFor = `filter-${value}`;
  return (
    <label htmlFor={htmlFor}>
      <input
        type="radio"
        id={htmlFor}
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
