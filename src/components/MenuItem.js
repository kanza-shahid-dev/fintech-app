import React from 'react'
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg'
import colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native';

export default function MenuItem(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(props.onPress)}>
        <View style={styles.menuItem}>
        <View style={styles.iconBackground}>
            <Image source={props.uri} style={{width:20,height:23}} ></Image>
            </View>
         <Text style={styles.menuItemText}>{props.title}</Text></View>
         </TouchableOpacity>
    )
}
const styles=StyleSheet.create(
    {
        menuItemText:{
            textAlign:'center',
            fontSize:13
        },
        iconBackground:{
            backgroundColor:colors.primary,
            alignItems:'center',
            justifyContent:'center',
            height:40,
            width:40,
            borderRadius:7,
            marginBottom:8
        },
        menuItem:{
            borderWidth:1,
            padding:10,
            borderColor:'#0691F8',
            width:108,
            height:118,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)