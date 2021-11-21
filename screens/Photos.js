import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

const Photos = ({navigation, route}) => {

  const [photoList, setPhotoList] = useState(null);
  const [photosareLoaded, setPhotosareLoaded] = useState(false);

  useEffect( () => {
    if(!photosareLoaded){
      fetch('https://jsonplaceholder.typicode.com/Photos?albumId+' + route.params.id)
      .then(response => response.json())
      .then(json => {
        setPhotoList(json);
        setPhotosareLoaded(true);
      })
    }
  })

  const photoView = () => {
    // console.log(photoList)
    if (photosareLoaded){
      console.log(route.params.id);
      return(
        <View>
          <Text>
            {route.params.title}
          </Text>
          <FlatList 
          data={photoList} 
          keyExtractor={(x, i) => i}
          renderItem={({item}) => {
            return <View style={styles.container}>
                <TouchableOpacity >
                <Image
                    style={styles.img}
                    source={{uri: item.url}}
                    />
                </TouchableOpacity>
            </View>
          }
        }/>
        </View>
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
    photoView()
  )
}

const styles = StyleSheet.create({
  container: {
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
  img: {
    width: 150,
    height: 150
  }
});

export default Photos