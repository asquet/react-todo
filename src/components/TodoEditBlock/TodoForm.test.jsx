import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import TodoForm from './TodoForm';

const f = () => {
};

function renderCmp(foreignConfig) {
  const config = Object.assign(
    {
      onCancel: f,
      onSave: f,
      onTextChange: f,
      formText: ''
    }, foreignConfig
  );

  return (<TodoForm
    onCancel={config.onCancel}
    onSave={config.onSave}
    onTextChange={config.onTextChange}
    formText={config.formText}
  />);
}

it(
  'renders without crashing', () => {
    const focusListener = jest.fn();

    const component = renderer.create(
      renderCmp(), {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            return {
              focus: focusListener
            };
          }
          return null;
        }
      }
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(focusListener.mock.calls.length).toBe(1);
  }
);

it(
  'responds to typing', () => {
    let rendered;
    const onTextChange = jest.fn(
      (text) => {
        rendered.setProps(
          {
            formText: text
          }
        );
      }
    );

    rendered = shallow(renderCmp({ onTextChange, formText: '' }));

    rendered.find('input').simulate(
      'change', {
        target: { value: '1' },
        preventDefault: () => {
        }
      }
    );
    expect(onTextChange.mock.calls[0][0]).toBe('1');
    expect(onTextChange.mock.calls.length).toBe(1);
    expect(rendered.find('input').props().value).toEqual('1');
  }
);

it(
  'responds to for submit', () => {
    const onSave = jest.fn();
    const onTextChange = jest.fn();

    const rendered = mount(renderCmp({ onSave, onTextChange, formText: 'text 1' }));

    rendered.find('[type="submit"]').get(0).click(
      {
        preventDefault: () => {
        }
      }
    );

    expect(onSave.mock.calls.length).toBe(1);
    expect(onSave.mock.calls[0][0]).toBe('text 1');

    expect(onTextChange.mock.calls.length).toBe(1);
  }
);


it(
  'responds to cancel btn click', () => {
    const onCancel = jest.fn();
    const onTextChange = jest.fn();

    const rendered = shallow(renderCmp({ onCancel, onTextChange, formText: 'text 1' }));

    rendered.find('button.btn-default').simulate(
      'click', {
        preventDefault: () => {
        }
      }
    );

    expect(onCancel.mock.calls.length).toBe(1);

    expect(onTextChange.mock.calls.length).toBe(1);
    expect(onTextChange.mock.calls[0][0]).toBe('');
  }
);
