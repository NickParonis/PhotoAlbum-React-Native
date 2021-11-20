import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

// import Navigator from './routes/homeStack';
// import Homestack from '../PhotoAlbum-React-Native/routes/Homestack';


const Photos = () => {


  const [photoList, setPhotoList] = useState(null);
  const [photosareLoaded, setPhotosareLoaded] = useState(false);

  useEffect( () => {
    if(!photosareLoaded){
      fetch('https://jsonplaceholder.typicode.com/Photos')
      .then(response => response.json())
      .then(json => {
      setPhotoList(json);
      setPhotosareLoaded(true);
    })
    }
  })


  const photoView = () => {
    console.log(photoList)
    if ( photosareLoaded){
      return(
        <FlatList 
          data={photoList} 
          keyExtractor={(x, i) => i}
          renderItem={({item}) => {
            return <View style={styles.container}>
                <TouchableOpacity  onPress={ () => console.log(item.id)}>
                <Image
                    style={styles.img}
                    source={{uri: item.url}}
                    />
                    <Text>dasdas</Text>
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