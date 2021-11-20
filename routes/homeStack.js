import { createStackNavigator } from "react-navigation-stack";
import {  createAppContainer } from "react-navigation";
import Home from '../screens/Home'
import Albums from '../screens/Albums'
import Photos from '../screens/Photos'


const screens = {
    Home: {
        screen: Home
    },
    Albums: {
        screen: Albums
    },
    Photos: {
        screen: Photos
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)