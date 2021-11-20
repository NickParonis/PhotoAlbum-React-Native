import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

function Home ({navigation }) {
  const navigationRef = useNavigationContainerRef(); 

  return (
    <View style={{ flex: 1 }}>
        <Button
            onPress={() => navigation.navigate('Home2')}
            title="Go home"
        />
    </View>
  );
}

export default Home