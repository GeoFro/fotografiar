import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button', () => {
  test('Calls click handler function on a click', () => {
    // Mock function to be called on click
    const handleClickMock = jest.fn();

    // Render the button with handleClick
    const wrapper = shallow(
      <Button handleClick={handleClickMock}/>
    );

    // Simulate a click on the button
    wrapper.find('button').simulate('click');

    // Check to see if the mock function was called exactly once (corresponding to one click)
    expect(handleClickMock.mock.calls.length).toBe(1);
  });
});
