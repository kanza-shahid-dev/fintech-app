import React from 'react'
import { View, Text ,Image, StyleSheet, Linking} from 'react-native'
import ButtonComp from '../components/ButtonComp'
import {SvgUri} from 'react-native-svg';
import colors from '../constants/colors';
export default function AccountCreated() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/thumb.jpg')} style={{height:230,width:230,marginTop:10,marginBottom:10}} />
           <View><Text style={{fontSize:35,fontWeight:'900'}}>Account Created!</Text></View>
             <Text style={{fontSize:14,color:'grey',marginTop:10,fontWeight:'900'}}>Dear user your account has been created {'\n'} successfully.
             Continue to start using app</Text>
             
  <View style={{flex:1,width:'100%' ,justifyContent:'flex-end'}}>    
  <ButtonComp title="CONTINUE" onPress="Home"></ButtonComp>
             <View style={{width:'100%'}}><Text style={{fontSize:13,color:'#5B544E',textAlign:'center',marginTop:30,fontWeight:'900'}}>by clicking start, you agree to our  
             <Text style={{color: colors.primary,fontWeight:'900',textDecorationLine:'underline'}}
      onPress={() => Linking.openURL('http://google.com')}>
   Privacy Policy</Text> {'\n'} our  <Text style={{color: colors.primary,fontWeight:'900',textDecorationLine:'underline'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Terms and Conditions</Text></Text></View>
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