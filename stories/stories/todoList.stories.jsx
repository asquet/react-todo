import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ItemList from '../../src/components/TodoList/ItemList';

const item = {
  id: 1,
  text: 'Todo item with a little text and checkbox.',
  isDone: false
};

const mediumTextItem = {
  id: 2,
  text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  isDone: false
};

const largeTextItem = {
  id: 3,
  text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
  isDone: false
};

const simpleItems = [
  item, Object.assign({}, item, { id: 2 }), Object.assign({}, item, { id: 3 })
];

const diverseItems = [item, mediumTextItem, largeTextItem];

const largeList = [...Array(100).keys()].map(
  i => Object.assign(
    {}, item, {
      id: i,
      text: item.text + ' ' + i
    }
  )
);

storiesOf('complex.ItemList', module)
  .addDecorator(
    (story) => (
      <div style={{ textAlign: 'center', padding: 10 }}>
        {story()}
      </div>
    )
  )
  .add(
    'simple list', () => (
      <ItemList items={simpleItems} itemUpdate={action('updated item')}></ItemList>
    )
  )
  .add(
    'different items', () => (
      <ItemList items={diverseItems} itemUpdate={action('updated item')}></ItemList>
    )
  )
  .add(
    'many items', () => (
      <ItemList items={largeList} itemUpdate={action('updated item')}></ItemList>
    )
  );

