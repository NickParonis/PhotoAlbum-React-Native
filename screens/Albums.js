import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

// import Navigator from './routes/homeStack';
// import Homestack from '../PhotoAlbum-React-Native/routes/Homestack';


const App = () =>   {

  const [albumList, setAlbumList] = useState(null);
  const [albumsareLoaded, setAlbumsareLoaded] = useState(false);

  useEffect( () => {
    if(!albumsareLoaded){
      fetch('https://jsonplaceholder.typicode.com/Albums')
      .then(response => response.json())
      .then(json => {
      setAlbumList(json);
      setAlbumsareLoaded(true);
    })
    }
  })



  const albumView = () => {
    console.log(albumList)
    if (albumsareLoaded){
      return(
        <FlatList 
          data={albumList} 
          keyExtractor={(x, i) => i}
          renderItem={({item}) => {
            return <View>
              <TouchableOpacity onPress={ () => console.log(item.id)}>
                <Text style={styles.albumView}>{item.id} {item.title} </Text>
              </TouchableOpacity>
            </View>
          }}/>
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