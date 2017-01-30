import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import CreateButton from './CreateButton';


it(
  'renders without crashing', () => {
    const component = renderer.create(
      <CreateButton
        onClick={() => {
        }}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  }
);

it(
  'responds to click', () => {
    const onClick = jest.fn();
    const rendered = shallow(<CreateButton onClick={onClick} />);
    rendered.simulate('click', { preventDefault: () => {} });

    expect(onClick.mock.calls.length).toBe(1);
  }
);
