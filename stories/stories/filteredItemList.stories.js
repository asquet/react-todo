import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import FilteredItemList from '../../src/components/Filter/Filter';

const items = [{
  id: 1,
  text: 'done',
  isDone: true
}, {
  id: 2,
  text: 'not done',
  isDone: false
}];

storiesOf('unsorted.Filter', module)
  .addDecorator((story) => (
    <div style={{textAlign: 'center', padding: 10}}>
      {story()}
    </div>
  ))
  .add('default', () => (
    <FilteredItemList items={items} itemUpdate={action('item update')}/>
  ));
