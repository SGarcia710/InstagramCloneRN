import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
