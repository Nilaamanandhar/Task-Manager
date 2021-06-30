import 'react-native';
import React from 'react';

import Login from '../../src/screen/Login';

import renderer from 'react-test-renderer';

describe('<Login />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});