import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import TodoItem from '../../src/components/TodoItem/TodoItem';

const item = {
  id: 1,
  text: 'Todo item with a little text and checkbox.',
  isDone: false
};

const mediumTextItem = {
  id: 1,
  text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  isDone: false
};

const largeTextItem = {
  id: 1,
  text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
  isDone: false
};

storiesOf('basic.TodoItem', module)
  .addDecorator((story) => (
    <div style={{textAlign: 'center', padding: 10}}>
      {story()}
    </div>
  ))
  .add('with text', () => (
    <TodoItem item={item} onChange={action('updated item')}></TodoItem>
  ))
  .add('medium text', () => (
    <TodoItem item={mediumTextItem} onChange={action('updated item')}></TodoItem>
  ))
  .add('large text', () => (
    <TodoItem item={largeTextItem} onChange={action('updated item')}></TodoItem>
  ));

