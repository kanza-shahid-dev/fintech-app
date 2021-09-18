import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet,Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SvgUri } from 'react-native-svg'
import ButtonComp from '../components/ButtonComp'
import SplashScreen from 'react-native-splash-screen'
import { parseSync } from '@babel/core';
export default function Login({navigation}) {
       //fields
       const [id,setId]=useState();
       const [pincode,setPincode]=useState();

       //fields errors
       const [idError,setIdError]=useState(null);
       const [pincodeError,setPincodeError]=useState(null);

       useEffect(() => {
        SplashScreen.hide();
      }, [])

   function ValidateId(value)
   {
       setId(value)
       if(value.length==0)
     {
       setIdError("Pin Required")
     }
     else
     {
         setIdError(null)
     }
       
   }
   function ValidatePincode(value)
   {
       setPincode(value)
       if(value.length==0)
     {
       setPincodeError("Pin Required")
     }
     else
     {
         setPincodeError(null)
     }
       
   }

   function SignIn()
   {
        // check if form is valid
        if(!(idError==null || pincodeError==null))
        {
            Alert.alert("Invalid","Form is invalid")
        }
       
        else
        {
        // check if user exists
        fetch('https://mtechubregistration.herokuapp.com/api/v1/login',{
            method:'POST',
            headers:{
                'Accpet':'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                "number":id,
                "pin":pincode
        })

        }).then(response=>{
            const statusCode=response.status;
            if(statusCode== 200)
            {
               
           
                return response.json(); //only returning if status ==200

            }
            else if(statusCode ==404)
            {
                Alert.alert("Error Login","User not found");
            }
           else if(statusCode == 403)
           {
               Alert.alert("Error Login","Wrong Pin");
           }
        })
        //it will be only called when used return response.json()
        .then(json=>{
            navigation.navigate("Home",{json})
            //getUserDataFromAPI(json)
        })
        
        }


   }
   
    return (
        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{flexGrow:1}}>
            <KeyboardAvoidingView style={styles.container}>
        <View >
        <Image source={require('../assets/images/logo.jpg')}  style={{height:111.6,width:111.6 ,margin:25,marginTop:30,marginBottom:10}} />
              <View style={{alignItems:'center'}}>
                  <Text style={[styles.appName,{fontFamily:'DMSans-Medium'}]}
              >LOGIN</Text></View>
        </View>
        <View style={{flex:1,width:'100%'}}>
            <View style={{padding:10}}>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color={"grey"}/>
                <TextInput keyboardType="number-pad" value={id} onChangeText={(value)=>ValidateId(value)} placeholder="Id or Phone no" style={styles.input}/>
            </View>
            <Text style={styles.error}>{idError}</Text>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color={"grey"}/>
                <TextInput secureTextEntry={true} value={pincode} onChangeText={(value)=>ValidatePincode(value)} placeholder="Pincode" style={styles.input} keyboardType="number-pad" ></TextInput>
            </View>
            <Text style={styles.error}>{pincodeError}</Text>


            <TouchableOpacity onPress={()=>navigation.navigate("SendCode")}>
            <View style={{alignItems:'flex-end',marginTop:8}}>
                <Text style={{fontSize:12, color:'#2D3033'}}>Forgot Pin?</Text>
                </View></TouchableOpacity>
            </View>
            <ButtonComp title="SIGNIN" onPress={SignIn}></ButtonComp>
            <View style={{flex:1,marginTop:10,alignItems:'center',justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                <Text style={{ fontSize:15,color:'#2D3033'}}>Don`t have an account? Sign Up</Text></TouchableOpacity>
                </View>
        </View>
         </KeyboardAvoidingView>
         </ScrollView>
    )
}

const styles=StyleSheet.create({
    
    container:{
        flex:1,
        alignItems:'center',
        padding:35,
    },
    appName:{
        fontSize:16,
        color:'#5B544E',
        fontWeight:'bold',
        marginBottom:15,
        marginTop:5,

    },
    inputContainer: {
        height:58,
        borderWidth:1,
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row',
        marginTop:7,
      },
      input:{
        fontSize:15,
        width:'100%',
        marginLeft:8,
        marginRight:8,
    },
    error:{
        width:'100%',
        color:'red',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    
})
