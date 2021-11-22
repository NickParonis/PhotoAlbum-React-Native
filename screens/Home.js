import React from 'react';
import { View, Button, StyleSheet,ImageBackground } from 'react-native';

const Home = ({navigation}) => {
  	return (
		<View style={styles.homeContainer}>
			<ImageBackground source={ require('../assets/bgcat.jpg') } style={styles.image}>
				<Button style={styles.homeButton} onPress={() => navigation.navigate('Albums')}
				title="View Albums"
				/>
			</ImageBackground>
		</View>
  	);
}

const styles = StyleSheet.create({
  	homeContainer: {
    	flex: 1,
 	},
 	image: {
		flex: 1,
		justifyContent: 'center',
  	},
})

export default Home