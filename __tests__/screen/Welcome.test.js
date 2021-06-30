import 'react-native';
import React from 'react';

import Welcome from '../../src/screen/Welcome';

import renderer from 'react-test-renderer';

describe('<Welcome />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});