import React, {useState} from 'react';
import Albums from './screens/Albums';
import Home from './screens/Home';
import Photos from './screens/Photos';
import ErrorView from './screens/ErrorView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Photos" component={Photos} />
        <Stack.Screen name="ErrorView" component={ErrorView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App