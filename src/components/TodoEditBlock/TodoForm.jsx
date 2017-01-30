import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {

  componentDidMount() {
    this.todoInput.focus();
  }

  render() {
    return (
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          this.props.onSave(this.props.formText);
          this.props.onTextChange('');
        }}
        className="TodoForm"
      >
        <div className="form-group">
          <label htmlFor="todoTextInput">Todo text</label>
          {' '}
          <input
            className="form-control TodoForm-textInput"
            type="text"
            id="todoTextInput"
            value={this.props.formText}
            ref={(input) => {
              this.todoInput = input;
            }}
            onChange={(ev) => {
              ev.preventDefault();
              this.props.onTextChange(ev.target.value);
            }}
          />
        </div>
        {' '}
        <button type="submit" className="btn btn-primary">Save</button>
        {' '}
        <button
          onClick={(ev) => {
            ev.preventDefault();
            this.props.onTextChange('');
            this.props.onCancel();
          }}
          className="btn btn-default"
        >
          Cancel
        </button>
      </form>
    );
  }
}


TodoForm.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onTextChange: React.PropTypes.func.isRequired,
  formText: React.PropTypes.string.isRequired
};

export default TodoForm;
