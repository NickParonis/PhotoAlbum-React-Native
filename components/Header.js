import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const  Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>
				{props.title}
			</Text>
		</View>
	);
};


const styles = StyleSheet.create({
  	header: {
		padding: 15,
		padding: 15,
		backgroundColor: 'black'
  	},
  	text: {
		color: '#fff',
		fontSize: 23,
		textAlign: 'center',
  	},
});

export default Header
