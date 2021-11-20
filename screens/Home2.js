import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

function Home2 ({ navigation }) {
  const navigationRef = useNavigationContainerRef(); 

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Button
            onPress={() => navigation.navigate('Photos')}
            title="Go home"
        />
    </View>
  );
}

export default Home2