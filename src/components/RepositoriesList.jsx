import React from "react";
import {FlatList, Text} from 'react-native'
import repositories from '../data/BDlesgirls.js'
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoriesList = () => 
{
    return (
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem ={({item: repo}) => 
        (
            <RepositoryItem {... repo}/>
        )}/>
        
    )
}
export default RepositoriesList