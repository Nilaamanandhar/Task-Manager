import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screen/Welcome';
import Main from '../screen/Main';
import Login from '../screen/Login'
const MainStack = createStackNavigator();
export default class AppNavigation extends Component {
      render() {
            return (
               <NavigationContainer>
                  <MainStack.Navigator initialRouteName="welcome">
                        <MainStack.Screen name="welcome" component={Welcome}/>
                        <MainStack.Screen name="login" component={Login}/>     
                        <MainStack.Screen name="main" component={Main}/>          
                  </MainStack.Navigator> 
               </NavigationContainer>
            )
      }
}
