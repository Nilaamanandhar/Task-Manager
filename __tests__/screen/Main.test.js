import 'react-native';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../../src/redux/store'

const store = configureStore()

import Main from '../../src/screen/Main';

import renderer from 'react-test-renderer';

describe('<Main />', () => {
      it('renders correctly', () => {
            const tree = renderer.create(<Provider store={store}>
                  <Main />
            </Provider>).toJSON();
            expect(tree).toMatchSnapshot();
      });
});