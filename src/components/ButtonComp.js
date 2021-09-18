import React,{useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native';
export default function ButtonComp(props) {
  const navigation = useNavigation();
   
    function getBackgroundColor()
    {
        if(props.type =="primary")
        {
            return colors.primary;
        }
        if(props.type =="default")
        {
            return colors.secondary;
        }
        else{
            return colors.secondary;
        }
    }
   
    return (
        <View>
          
          <TouchableOpacity style={[styles.container,{backgroundColor:getBackgroundColor()}]} 
        onPress={props.onPress}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{}}>{props.icon && props.icon}</View>
           <Text style={styles.text}>{props.title}</Text>
            </View>
          
          </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        marginTop:10,
        height:58,
    },
    text:{
        fontSize:20,
        padding:13,
        color:'white',
    }
})
