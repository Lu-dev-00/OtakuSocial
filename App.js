import React from 'react';
import {View,Text,Button,Stylesheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import onboarding from './App/onboarding';
import signIn from './App/signIn';


const AuthStack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
          <AuthStack.Navigator headerMode="false">
            <AuthStack.Screen name='onboarding' component={onboarding}></AuthStack.Screen>
            <AuthStack.Screen name="signIn" component={signIn}></AuthStack.Screen> 
          </AuthStack.Navigator>
      </NavigationContainer>
    )
  }



export default App;