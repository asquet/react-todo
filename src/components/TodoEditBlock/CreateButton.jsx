import React from 'react';

function CreateButton({ onClick }) {
  return (
    <button
      className="btn btn-primary"
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}
    >Add todo </button>
  );
}

CreateButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default CreateButton;
