import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
        <Button
            onPress={() => navigation.navigate('Albums')}
            title="View Albums"
        />
    </View>
  );
}

export default Home