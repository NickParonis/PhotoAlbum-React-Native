import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

const ErrorView = ({navigation}) => {

  return (
    <View style={{ flex: 1 }}>
      <Text>Under construction</Text>
    </View>
  );
}

export default ErrorView