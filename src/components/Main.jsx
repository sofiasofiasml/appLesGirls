import React from "react";
import Constants from 'expo-constants'
import { Text, View } from "react-native";
import RepositoriesList from './RepositoriesList.jsx'
import SearchScreen from './SearchScreen.jsx'
// import * as Font from 'expo-font';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     // Load your fonts here
//     'custom-font': require('./assets/fonts/ABeeZee-Regular.ttf'),
//   });
// };

const Main = () => {
    return(
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
            <SearchScreen/>
            <RepositoriesList />
        </View>
    )
}

export default Main