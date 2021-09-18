import React,{useState} from 'react'
import { View, Text,StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import {CountryPicker} from "react-native-country-codes-picker/components/CountryPicker";
import RNPhoneCodeSelect from "react-native-phone-code-select";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SendCode() {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ "dial_code": "+91"});


    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
        <View>
          <View style={{alignItems:'center'}}>
              <Image source={require('../assets/images/logo.jpg')} style={{height:130,width:130,marginTop:30}} />
              </View>
          <View style={{alignItems:'center'}}><Text style={styles.appName}>DUMMY LOGO</Text></View>
          <Text style={{textAlign:'center',marginTop:30, fontWeight:'bold',fontSize:21}}>Forgot Pin?</Text>
          <Text style={{textAlign:'center',fontSize:15,marginTop:35,marginBottom:20}}>Enter Phone No for Verification Code</Text>
        </View>
        
        <View style={{flexDirection:'row', borderWidth:1,width:'100%',height:58}}>
            <TouchableOpacity
        onPress={() => setVisible(true)} style={{justifyContent:'center'}}>
                <View style={{flexDirection:'row',}}>
                <Text style={{marginLeft:10,fontSize:15}}>{selectedCountry.dial_code}</Text>
                <Image source={require('../assets/images/arrowdown.png')}  style={{marginLeft:10,marginTop:5,marginRight:5}}></Image>
               </View>
           </TouchableOpacity>
           <View style={{justifyContent:'center'}}>
            <TextInput placeholder="Phone No" keyboardType="number-pad" style={{fontSize:15}}  />
            </View>
         </View>
            
        <View style={{flex:1,width:'100%'}}>
            <View style={{flex:1,width:'100%',justifyContent:'flex-end'}}>
            <ButtonComp title="SEND CODE" onPress="Verification"></ButtonComp>
         </View>
     
        </View>
        <RNPhoneCodeSelect
  visible={visible}
  onDismiss={() => setVisible(false)}
  onCountryPress={(country) => {
    setSelectedCountry(country)}}
  primaryColor="#f04a4a"
  secondaryColor="#000000"
  buttonText="Ok"
/>
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
        marginTop:5,
    },
    input:{
        borderWidth:1,
        borderColor:'#5B544E',
        padding:20,
        height:30,
        marginTop:25
    }
})
