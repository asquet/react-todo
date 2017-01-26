import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TodoForm from '../../src/components/TodoEditBlock/TodoForm';

storiesOf('basic.TodoForm', module)
  .addDecorator(
    (story) => (
      <div style={{ textAlign: 'center', padding: 10 }}>
        {story()}
      </div>
    )
  )
  .add(
    'not text', () =>
      <TodoForm
        onCancel={action('cancel')}
        onSave={action('save')}
        onTextChange={action('onTextChange')}
        formText=""
      />
  ).add(
  'with text', () =>
    <TodoForm
      onCancel={action('cancel')}
      onSave={action('save')}
      onTextChange={action('onTextChange')}
      formText="text"
    />
);
