import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const App = ({navigation}) =>   {

  const [albumList, setAlbumList] = useState(null);
  const [albumsareLoaded, setAlbumsareLoaded] = useState(false);

  useEffect( () => {
    if(!albumsareLoaded){
      fetch("https://jsonplaceholder.typicode.com/Albums")
      .then( (response) => {
        if (response.ok){
          return response.json()}
        else {
          console.log("Something went wrong, check server's response")
      }})
      .then( (json) => {setAlbumList(json); setAlbumsareLoaded(true);})
      .catch( (error) => {
        navigation.navigate('ErrorView')
      });
    }
  })
  
  const albumView = () => {
    if (albumsareLoaded){
      return(
        <FlatList data={albumList}  keyExtractor={(x, i) => i}
        renderItem={({item}) => {
        return <View>
          <TouchableOpacity  onPress={ () => {navigation.navigate('Photos', item); console.log(item)}}>
            <Text style={styles.albumView}> {item.title} </Text>
          </TouchableOpacity>
        </View>}}/>
      )
    }
    else {
      return(
        <View>
          <Text>Loading Please Wait</Text>
        </View>
      )
    }
  }

  return(
    albumView()
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  albumView: {
    width: 250,
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8,
    height: 60,
    borderRadius: 6,
    backgroundColor: "#61dafb",
    fontSize: 20,
  }
});

export default App