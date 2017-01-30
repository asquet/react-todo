import React from 'react';
import './FilterItem.css';

function FilterItem({ value, onChange, selected, children }) {
  const htmlFor = `filter-${value}`;
  return (
    <div className="FilterItem">
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
    </div>
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
