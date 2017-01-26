import React from 'react';

import CreateButton from './CreateButton';
import TodoForm from './TodoForm';

function TodoEditBlock({ onSave, setFormVisible, setFormText, isFormVisible, formText }) {
  return (
    <div>
      {isFormVisible ? (
        <TodoForm
          onTextChange={setFormText}
          formText={formText}
          onSave={(text) => {
            setFormVisible(false);
            onSave(text);
          }}
          onCancel={() => setFormVisible(false)}
        />
        ) : (
          <CreateButton onClick={() => setFormVisible(true)} />
        )}
    </div>
  );
}

TodoEditBlock.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  setFormVisible: React.PropTypes.func.isRequired,
  setFormText: React.PropTypes.func.isRequired,
  isFormVisible: React.PropTypes.bool.isRequired,
  formText: React.PropTypes.string.isRequired,
};

export default TodoEditBlock;
