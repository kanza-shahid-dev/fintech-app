import React,{useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import { BottomSheet } from 'react-native-btr'
import ButtonComp from './ButtonComp'

const CustomerBottomSheet = (props) => {
    const[visibility,setVisibility]=useState(false);
    function toggleBottomSheet()
    {
        if(visibility==true)
        setVisibility(false)
        else
        setVisibility(true)
    }
    return (
        <View></View>
       
    )
}

export default CustomerBottomSheet
