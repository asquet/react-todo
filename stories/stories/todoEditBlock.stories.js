import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import TodoEditBlock from '../../src/components/TodoEditBlock/TodoEditBlock';


storiesOf('complex.TodoEditBlock', module)
  .addDecorator((story) => (
    <div style={{textAlign: 'center', padding: 10}}>
      {story()}
    </div>
  ))
  .add('block', () => (
    <TodoEditBlock onCreateTodo={action('createTodo')}></TodoEditBlock>
  ));
