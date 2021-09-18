import React from 'react'
import { View, Text, StyleSheet,Image, TextInput, ScrollView } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import { SvgUri } from 'react-native-svg';
import ButtonComp from '../components/ButtonComp'

export default function Verification() {
    return (
        <ScrollView  contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
            <View >
            <Image source={require('../assets/images/logo.jpg')}  style={{height:111.6,width:111.6 ,margin:25,marginTop:25,marginBottom:10}} />
        </View>
          <View style={{alignItems:'center'}}><Text style={styles.appName}>DUMMY LOGO</Text></View>
          <Text style={{textAlign:'center',marginTop:23, fontWeight:'bold',fontSize:23}}>Verification</Text>
          <Text style={{textAlign:'center',fontSize:15,marginBottom:20}}>Enter Code below</Text>
        <View style={{flex:1,justifyContent:'flex-end',width:'100%'}}>
       <View style={{flex:1}}>
        <CodeInput
         activeColor='black'
         inactiveColor='#D8DDE1'
         size={51}
         fontSize={30}
         color='grey'//input color
         codeLength={4}
         space={27}
         keyboardType='phone-pad'
         codeInputStyle={{ borderWidth: 1 }} />
         </View>
         <View style={{flex:1,justifyContent:'flex-end'}}>
            <ButtonComp title="VERIFY"  onPress="ResetPin"></ButtonComp></View>
            </View>
         </View>
         </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        padding:55,
    },
    appName:{
        fontSize:18,
        color:'#5B544E',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:3,
    },
    input:{
        borderWidth:1,
        borderColor:'#5B544E',
        padding:20,
        height:60,
        marginTop:25
    }
})
