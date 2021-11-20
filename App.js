import React, {useState} from 'react';
import Albums from './screens/Albums';
import Home from './screens/Home';
import Home2 from './screens/Home2';
import Photos from './screens/Photos';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Photos" component={Photos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App