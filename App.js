import React from 'react';
import {View} from 'react-native';
import AppNavigation from './src/route/AppNavigation';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigation />
      </View>
    );
  }
}
