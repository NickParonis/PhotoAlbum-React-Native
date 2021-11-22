import React, {useState} from 'react';
import Albums from './screens/Albums';
import Home from './screens/Home';
import Photolist from './screens/Photolist';
import PhotoView from './screens/PhotoView';
import ErrorView from './screens/ErrorView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Stack navigation screens. App starts from Home screen and switches screen based on user input
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Albums" component={Albums} />
				<Stack.Screen name="Photolist" component={Photolist} />
				<Stack.Screen name="PhotoView" component={PhotoView} />
				<Stack.Screen name="ErrorView" component={ErrorView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App