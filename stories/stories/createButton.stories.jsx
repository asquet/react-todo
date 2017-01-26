import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CreateButton from '../../src/components/TodoEditBlock/CreateButton';


storiesOf('basic.CreateButton', module)
  .addDecorator((story) => (
    <div style={{ textAlign: 'center', padding: 10 }}>
      {story()}
    </div>
  ))
  .add('btn', () => (
    <CreateButton onClick={action('createTodo')}></CreateButton>
  ));
