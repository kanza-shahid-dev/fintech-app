import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import Icon from 'react-native-ionicons'

const HeaderBanner = (props) => {
    
    return (
        <View style={styles.bannerContainer}>
            <View >{props.icon}</View>
         <Text style={styles.bannerHeading}>{props.title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    bannerContainer:{
        backgroundColor:'#0691F8',
        padding:30,
        height:157,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    bannerHeading:{
        color:'white',
        fontWeight:'900',
        marginLeft:23,
        textAlign:'center',
        fontSize:23,
        marginBottom:20,
        marginTop:20
}

})

export default HeaderBanner
