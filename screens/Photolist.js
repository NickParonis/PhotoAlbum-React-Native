import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import Header from "../components/Header"

const Photolist = ({navigation, route}) => {

  	const [photoList, setPhotoList] = useState(null);
  	const [photosareLoaded, setPhotosareLoaded] = useState(false);

	// get device width & height
	let deviceHeight = Dimensions.get("window").height;
	let devicewidth = Dimensions.get("window").width;

  	useEffect( () => {
    // if statement so this function doesn't trigger on state change
		if(!photosareLoaded){
			fetch('https://jsonplaceholder.typicode.com/Photos?albumId=' + route.params.id)
			.then(response => response.json())
			.then(json => {
				setPhotoList(json);
				setPhotosareLoaded(true);
			})
		}
	})

	const photoView = () => {
		// if statement so loading screen appears if data aren't fetched yet
		if (photosareLoaded){
			console.log(photoList);
			return(
				<View style={{flex: 1}}>
					<Header title={route.params.title} style={{flex: 1}}/>
					<View style={styles.container}>
						<FlatList numColumns={3} data={photoList} keyExtractor={(x, i) => i}
							renderItem={({item}) => {
								return <TouchableOpacity onPress={ () => {navigation.navigate('PhotoView', item)}}>
									<Image
										style={{ height: deviceHeight / 5, width: (devicewidth / 3 - 8), margin: 4}}
										source={{uri: item.thumbnailUrl}}
									/>
								</TouchableOpacity>
							}
						}/>
					</View>
				</View>
			)
		}
		else {
			return(
				<View style={styles.centerContainer}>
					<Text>Loading Please Wait</Text>
				</View>
			)
		}
	}
	return(
		photoView()
	)
}

const styles = StyleSheet.create({
  	centerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex:1
 	},
  	FlatListView: {
    	
  	},
 	FlatList: {
		flex: 1,
		flexDirection: "row"
  	},
  	photoView: {
		width: 120,
		marginTop: 16,
		marginLeft: 8,
		marginRight: 8,
		height: 60,
		borderRadius: 6,
		backgroundColor: "#61dafb",
		fontSize: 20,
  	},
  	container: {
		flex: 7,
		display: "flex",
		flexWrap: "wrap"
  	},
});

export default Photolist