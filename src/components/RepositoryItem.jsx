import React from "react"
import { View, StyleSheet} from "react-native"
import StyledText from "./StyledText.jsx"

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>Title: {props.title}</StyledText>
        <StyledText>Date: {props.date} - {props.dateFin}</StyledText>
        <StyledText>Hour: {props.hour} - {props.hourFin}</StyledText>
        <StyledText>Image: {props.image}</StyledText>
        <StyledText>Organizer: {props.organizer}</StyledText>
        <StyledText>Ubi: {props.ubi}</StyledText>
        <StyledText>description: {props.content}</StyledText>
        <StyledText>Categoria: {props.categoria}</StyledText>
    </View>

)

// STYLE
const styles = StyleSheet.create(
    {
       container: {
        padding:20, 
        paddingBottom:5, 
        paddingTop:5,
       }
    }
)

export default RepositoryItem