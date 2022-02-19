import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '@app/screens/SignIn';
import SignUpScreen from '@app/screens/SignUp';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
