import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonComp from '../components/ButtonComp'

export default function ResetPin() {
    return (
   
        <ScrollView  contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
        <View >
        <Image source={require('../assets/images/logo.jpg')} style={{height:130,width:130,marginTop:30}} />
            <View style={{alignItems:'center'}}><Text style={styles.appName}>DUMMY LOGO</Text></View>
          <Text style={{textAlign:'center',marginBottom:15,marginTop:20, fontWeight:'bold',fontSize:20}}>Reset Pin</Text>
        </View>
        <View style={{flex:1,width:'100%'}}>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color={"grey"}/>
                <TextInput secureTextEntry={true} keyboardType="number-pad" placeholder="New Pin" style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color={"grey"}/>
                <TextInput secureTextEntry={true} keyboardType="number-pad" placeholder="Confirm New Pin" style={styles.input}/>
            </View>
            <View style={{flex:1,width:'100%',justifyContent:'flex-end'}}>
            <ButtonComp title="CONTINUE"  onPress="AccountCreated"></ButtonComp>
         </View>
        
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
        padding:50,
    },
    appName:{
        fontSize:18,
        color:'#5B544E',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:5,
    },
    inputContainer: {
        borderWidth:1,
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row',
        marginTop:15,
        height:58,
        marginBottom:5,
        marginLeft:10,
        marginRight:10
      },
      input:{
        width:'100%',
        marginLeft:8,
        height:58,
        marginRight:8,
        fontSize:15,
    },
    
})
