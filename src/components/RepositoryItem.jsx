import React from "react"
import { View, Image, StyleSheet} from "react-native"
import StyledText from "./StyledText.jsx"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";


const RepositoryItem = (props) => (
    
    <View key={props.id} style={styles.container}>
        <View key={props.id} style={styles.flexContainer}>
            <Image source={{ uri: props.image}}  style={styles.image} />
            <View style={styles.flexDescrition}>
                <RepositoryColumn {...props} />
            </View>
        </View>
    </View>


)

const RepositoryStats = props =>
{
    return(
        <View>
        <StyledText>Ubi: {props.ubi}</StyledText>
        <StyledText>Organizer: {props.organizer}</StyledText>
        {/* <StyledText>Categoria: {props.categoria}</StyledText> */}
        {/* <StyledText>description: {props.content}</StyledText> */}
        <View style={{  flexDirection: "row",
        justifyContent: "flex-end"}} >
            <Ionicons name="bookmark-outline" size={20} style={styles.iconLeft}/>
            <Ionicons name="share-social-outline" size={20}></Ionicons>
        </View>
        </View>
    )
}

const RepositoryColumn = props =>
{
    const dayOfWeekInicio = new Date(props.date).toLocaleString([], {
        weekday: 'short',day: 'numeric',month: 'short',
      });
      const dayOfWeekFin = new Date(props.dateFin).toLocaleString([], {
        weekday: 'short',day: 'numeric',month: 'short',
      });

    return(
        <View > 
        {dayOfWeekInicio !== dayOfWeekFin ? (
            <StyledText style={styles.DateHour}>{dayOfWeekInicio} -  {dayOfWeekFin} {props.hour} - {props.hourFin}</StyledText>

        ): (
            <StyledText style={styles.DateHour}>{dayOfWeekInicio} {props.hour} - {props.hourFin}</StyledText>

        )}
        <StyledText fontSize='subheading' fontWeight='bold'>{props.title}</StyledText>
        <RepositoryStats {...props}/>
        </View>
    )
}


// STYLE
const styles = StyleSheet.create(
    {
       container: {
        padding:20, 
        paddingBottom:5, 
        paddingTop:5,

       }, 
       flexContainer: 
       {
        flexDirection: "row", 
       },
       flexDescrition:
       {
        flex:1
       },
       image: {
        width: 150,
        height: 150,
        marginVertical: 10,
        marginRight: 20,
        borderRadius: 10
      },
      DateHour: 
      {
        textTransform: 'uppercase', 
        color: '#5669FF'
      }, 
      iconLeft:
      {
        marginRight:5
      }
    }
)

export default RepositoryItem