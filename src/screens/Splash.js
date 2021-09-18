import React,{useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {SvgUri} from 'react-native-svg';
import SplashScreen from 'react-native-splash-screen'

export default function Splash({navigation}) {
    useEffect(() => {
        SplashScreen.hide();
      }, [])
    return (
        <View style={{flex:1,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
         <View style={{flex:1,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/images/logo.jpg')}  style={{height:111.6,width:111.6 ,margin:25}} />
            <Text style={{fontSize:16,color:'black',fontWeight:'900'}}>DUMMY LOGO</Text>
        </View>
        </TouchableOpacity>
        </View>

    )
}
