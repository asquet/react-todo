import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import TodoForm from '../../src/components/TodoEditBlock/TodoForm';


storiesOf('basic.TodoForm', module)
  .addDecorator((story) => (
    <div style={{textAlign: 'center', padding: 10}}>
      {story()}
    </div>
  ))
  .add('form', () => (
    <TodoForm onCancel={action('cancel')} onSave={action('save')}></TodoForm>
  ));
