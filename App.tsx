import Navigation from '@app/navigation';
import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';

const App = () => {
  return <Navigation />;
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default App;
