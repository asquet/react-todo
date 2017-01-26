import React from 'react';

function TodoForm({ onSave, onTextChange, onCancel, formText }) {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSave(formText);
      }}
      className=""
    >
      <div className="form-group">
        <label htmlFor="todoTextInput">Todo text</label>
        <input
          className="form-control"
          type="text"
          id="todoTextInput"
          value={formText}
          onChange={(ev) => {
            ev.preventDefault();
            onTextChange(ev.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Save</button>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            onTextChange('');
            onCancel();
          }}
          className="btn btn-default"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onTextChange: React.PropTypes.func.isRequired,
  formText: React.PropTypes.string.isRequired
};

export default TodoForm;
