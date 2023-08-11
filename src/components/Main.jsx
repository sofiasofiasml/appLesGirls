import React from "react";
import Constants from 'expo-constants'
import { Text, View } from "react-native";
import RepositoriesList from './RepositoriesList.jsx'

const Main = () => {
    return(
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
            <RepositoriesList />
        </View>
    )
}

export default Main