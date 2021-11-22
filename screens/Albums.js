import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const App = ({navigation}) =>   {

	// initializing state with album list and a boolean showing if data are fetched
	const [albumList, setAlbumList] = useState(null);
	const [albumsareLoaded, setAlbumsareLoaded] = useState(false);

  	useEffect( () => {
    	// if statement so this doesn't trigger on state change
		if(!albumsareLoaded){
			fetch("https://jsonplaceholder.typicode.com/Albums?userId=1")
			.then( (response) => {
				if (response.ok){return response.json()}
				else {console.log("Something went wrong, check server's response")}
			})
			.then( (json) => {setAlbumList(json); setAlbumsareLoaded(true);})
			.catch( (error) => {
				navigation.navigate('ErrorView')
			});
		}
  	})
  
	const albumView = () => {
		// if statement so loading screen appears if data aren't fetched yet
		if (albumsareLoaded){
			return(
				<View style={styles.homeContainer}>
					<ImageBackground source={ require('../assets/bgcat.jpg') } style={styles.image}>
						<FlatList data={albumList}  keyExtractor={(x, i) => i}
						renderItem={({item}) => {
						return <View style={styles.albumComponent}>
							<TouchableOpacity  onPress={ () => {navigation.navigate('Photolist', item)}}>
								<Text style={styles.albumNumtext}> {"Album " + item.id} </Text>
								<Text style={styles.albumTitletext}> {item.title} </Text>
							</TouchableOpacity>
						</View>}}/>
					</ImageBackground>
				</View>
			)
		}
		else {
			return(
				<View style={styles.centerContainer}>
					<Text >Loading. Please wait...</Text>
				</View>
			)
		}
	}

	return(
    	albumView()
  	)
}

const styles = StyleSheet.create({
  	centerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex:1
 	},
		homeContainer: {
		justifyContent: 'center',
		flex:1,
 	},
  	albumComponent: {
		opacity: 0.8,
		borderRadius: 6,
		marginTop: 20,
		backgroundColor: "lightgrey",
		marginLeft: 40,
		marginRight: 40,
  	},
	albumNumtext: {
		fontSize: 18,
		height: 25,
		textAlign: 'center',
		flex: 1,
		flexDirection: "row"
  	},
		albumTitletext: {
		fontSize: 24,
		textAlign: 'center',
		flex: 2,
		flexDirection: "row",
		paddingBottom: 3
  	},
  	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
  	},
});

export default App