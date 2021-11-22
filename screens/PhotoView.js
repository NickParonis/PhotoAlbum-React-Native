import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const PhotoView = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Image style={{height: 600, width: 600 }} source={{uri: route.params.url}}/>
            <Text>{"Image title: " + route.params.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
    }
});

export default PhotoView