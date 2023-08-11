import React from "react"
import { View, Text, StyleSheet} from "react-native"

const RepositoryItem = (props) => (
    <View key={props.id} style={style.container}>
        <Text style={style.strong}>Title: {props.title}</Text>
        <Text>Date: {props.date} - {props.dateFin}</Text>
        <Text>Hour: {props.hour} - {props.hourFin}</Text>
        <Text>Image: {props.image}</Text>
        <Text>Organizer: {props.organizer}</Text>
        <Text>Ubi: {props.ubi}</Text>
        <Text>description: {props.content}</Text>
        <Text>Categoria: {props.categoria}</Text>
    </View>

)

// STYLE
const style = StyleSheet.create(
    {
       container: {
        padding:20, 
        paddingBottom:5, 
        paddingTop:5,
       }, 
       strong: {
        // color: '#09f',
        fontWeight:'bold', 
        marginBottom: 5,
       } 
    }
)

export default RepositoryItem