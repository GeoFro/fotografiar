import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  test('renders default header text', () => {
    const component = renderer.create(
      <Header/>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders provided header text', () => {
    const headerText = 'Testing';

    const component = renderer.create(
      <Header text={headerText} />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
})
