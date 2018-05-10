import React from 'react';
import { shallow } from 'enzyme';
import Header, { DEFAULT_HEADER_TEXT } from './Header';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {
  test('renders default header text', () => {
    const wrapper = shallow(
      <Header/>
    );

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.contains(DEFAULT_HEADER_TEXT)).toBe(true);
  });

  test('renders provided header text', () => {
    const headerText = 'Testing';

    const wrapper = shallow(
      <Header text={headerText} />
    );

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.contains(headerText)).toBe(true);
  });
});
