import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ButtonComp from '../components/ButtonComp'

export default function Sucessful() {
    return (
        <View style={styles.container}>
             <Image source={require('../assets/images/thumb.jpg')} style={{height:230,width:230,marginTop:50,marginBottom:20}} />
             <View><Text style={{fontSize:35,fontWeight:'900'}}>Successfull</Text></View>
             <View style={{width:'100%',flex:1,justifyContent:'flex-end'}}>
             <ButtonComp title="Back to Home" onPress="Home" ></ButtonComp>
             </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:45,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    }
})