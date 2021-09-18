import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, TextInput,KeyboardAvoidingView, ScrollView, Picker, TouchableOpacity, ImagePickerIOS, Modal, Button, Alert } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPhoneCodeSelect from "react-native-phone-code-select";
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary,showImagePicker} from 'react-native-image-picker';
import colors from '../constants/colors';
import { BottomSheet } from 'react-native-btr';
export default function Register({navigation}) {
    const [value, setValue] = React.useState('first');

    //fields
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [cityName,setCityName]=useState();
    const [email,setEmail]=useState();
    const [phoneNo,setPhoneNo]=useState();
    const [pincode,setPincode]=useState();
    const [gender,setGender]=useState();
    const [birthdate, setBirthdate] = useState('');

    //fields errors
    const [firstNameError,setFirstNameError]=useState(null);
    const [lastNameError,setLastNameError]=useState(null);
    const [cityNameError,setCityNameError]=useState(null);
    const [emailError,setEmailError]=useState(null);
    const [phoneNoError,setPhoneNoError]=useState(null);
    const [pincodeError,setPincodeError]=useState(null);
    const [birthdateError, setBirthdateError] = useState(null);

    const [visiblity,setVisibility]=useState(null);
    const [modelVisibility,setmodelVisibility]=useState(null);
    const [ImageSource,setImageSource]=useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg');
    const [visible, setVisible] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState({"code": "PK", "dial_code": "+92", "flag": "🇦🇦", "name": "Pakistan"});
    
    const handleDateSelected=(date)=>
    {
        var selected=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        setBirthdate(selected.toString());
    }

    function selectFromGallery(){
        setmodelVisibility(false);
        let options = {
            storageOptions: {
              skipBackup: true
            }
          };
        launchImageLibrary(options, (response) => {
            if (response.error) {
            }
            else if (response.didCancel) {
            }
            else{
                setImageSource(response.assets[0].uri);
            }
          });
    }
    function selectFromCamera() {
        setmodelVisibility(false);
        let options = {
          title: 'You can choose one image',
          maxWidth: 256,
          maxHeight: 256,
          storageOptions: {
            skipBackup: true
          }
        };
        
        launchCamera(options, (response) => {
            if (response.error) {
            }
            else if (response.didCancel) {
            }
            else {
              setImageSource(response.assets[0].uri);
            }
          });
        
      }

      function ValidateFirstName(value)
      {
          setFirstName(value)
          if(value.length==0)
          {
            setFirstNameError("First Name Required")
          }
          else
        {
            setFirstNameError(null)
        }

      }
      function ValidateLastName(value)
      {
        setLastName(value)
        if(value.length==0)
        {
          setLastNameError("Last Name Required")
        }
        else
        {
            setLastNameError(null)
        }
      }
      function ValidatePhoneNo(value)
      {
          setPhoneNo(value)
        if(value.length==0)
        {
          setPhoneNoError("Phone No Required")
        }
        else
        {
            setPhoneNoError(null)
        }
      }
      function ValidateCity(value)
      {
          setCityName(value)
        if(value.length==0)
        {
          setCityNameError("City Required")
        }
        else
        {
            setCityNameError(null)
        }
      }
      function validateEmail(value)
      {
        setEmail(value)
        if(value.length==0)
        {
          setEmailError("Email Required")
        }
        else if(!(value.includes("@")&& value.includes(".com")))
        {
            setEmailError("Invalid Email ")
        }
        else
        {
            setEmailError(null)
        }
      }
      function ValidateBirthdate(value)
      {
          setBirthdate(value)
        if(value.length==0)
        {
          setBirthdateError("Birthdate Required")
        }
        else
        {
            setBirthdateError(null)
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
      function signUp()
      {
        console.log("************",gender)

          if(!(emailError==null || firstNameError==null || lastNameError==null || city==null
            || phoneNoError==null || pincode ==null))
            {
                Alert.alert("Invalid Form","unable to register as form is invlaid")

            }
            else
            {
                //
                fetch('https://mtechubregistration.herokuapp.com/api/v1/register',{
                    method:'POST',
                    headers:{
                        'Accpet':'application/json',
                        'content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        "firstName":firstName,
                        "secondName":lastName,
                        "gender":gender,
                        "birthday":birthdate,
                        "city":cityName,
                        "email":email,
                        "number":phoneNo,
                        "pin":pincode
                    })
                })
                .then(res=>
                  {
                    const status=res.status
                    if(status==201)
                    {

                       //UploadImage()

                      Alert.alert("Account Created","Login to continue")
                      navigation.navigate("Login")
                    }
                    else if(status==409)
                    {
                      Alert.alert("Error","Number is already in use")

                    }
                    else{
                      Alert.alert("Error","Unable to register")
                    }
                  })

            }

      }
      function UploadImage()
      {
        
      

        //return
      }
    
    return (
        <ScrollView>
        <KeyboardAvoidingView>
            <View >
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:21,marginBottom:22,marginTop:35}}>REGISTER</Text>
            <TouchableOpacity onPress={()=>setmodelVisibility(true)}>
                  <Image source={
               {uri:ImageSource}
                } style={{height:65,width:65,borderRadius:40,marginBottom:17}}/>
            </TouchableOpacity>

            <BottomSheet
                visible={modelVisibility}
                onBackButtonPress={()=>setmodelVisibility(false)}
                onBackdropPress={()=>setmodelVisibility(false)} 
                onCancel={()=>setmodelVisibility(false)}>
                <View style={{backgroundColor:'white',padding:15}}>
                <TouchableOpacity onPress={selectFromCamera}>
                <Text style={{fontSize:18,padding:20,borderBottomWidth:1,borderColor:'grey'}}>Capture from Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={selectFromGallery}>
                <Text style={{fontSize:18,padding:20}}>Choose From Gallery</Text>
                </TouchableOpacity>
                </View>
            </BottomSheet>
         

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color={"grey"}/>
                <TextInput placeholder="First Name" value={firstName} onChangeText={value=>ValidateFirstName(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{firstNameError}</Text>


            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color={"grey"}/>
                <TextInput placeholder="Last Name" value={lastName} onChangeText={value=>ValidateLastName(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{lastNameError}</Text>


            <TouchableOpacity onPress={()=>setVisibility(true)}>
            <View style={styles.inputContainer}>
            <DateTimePickerModal
            isVisible={visiblity}
            onConfirm={(date)=>handleDateSelected(date)}
            onCancel={()=>setVisibility(false)}></DateTimePickerModal>
                <Icon name="calendar" size={20} color={"grey"}/>
                <TextInput editable={false} value={birthdate} placeholder="Birthday" style={styles.input}/>
            </View>
            </TouchableOpacity>
            <Text style={styles.error}>{birthdateError}</Text>

            <View style={styles.inputContainer}>
                <Icon name="home" size={20} color={"grey"}/>
                <TextInput placeholder="City" value={cityName} onChangeText={value=>ValidateCity(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{cityNameError}</Text>


            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color={"grey"}/>
                <TextInput placeholder="Email" keyboardType="email-address" value={email} onChangeText={value=>validateEmail(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{emailError}</Text>
                 
            <View style={[styles.inputContainer,{width:'105%'}]}>
            <TouchableOpacity
        onPress={() => setVisible(true)} style={{justifyContent:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Text >{selectedCountry.dial_code}</Text>
                <Image source={require('../assets/images/arrowdown.png')}  style={{marginLeft:10,marginTop:5,marginRight:5}}></Image>
                </View>
           </TouchableOpacity>
           <View style={{justifyContent:'center'}}>
            <TextInput placeholder="Phone No" value={phoneNo} onChangeText={value=>ValidatePhoneNo(value)} keyboardType="number-pad"  />
            </View>
            </View>
            <Text style={styles.error}>{phoneNoError}</Text>


         <RNPhoneCodeSelect
  visible={visible}
  onDismiss={() => setVisible(false)}
  onCountryPress={(country) => {
    setSelectedCountry(country)}}
  primaryColor="#f04a4a"
  secondaryColor="#000000"
  buttonText="Ok"
/>

           
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color={"grey"}/>
                <TextInput placeholder="Pincode" secureTextEntry={true} keyboardType="number-pad" value={pincode} onChangeText={value=>ValidatePincode(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{pincodeError}</Text>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
                <Text style={{fontSize:18,color:'grey'}}>Sex: </Text>
                 <View style={{width:210,paddingLeft:26,marginTop:15,marginLeft:10,borderWidth:1}}>
                 <Picker style={{color:'grey'}} 
                 selectedValue={gender}
                 onValueChange={(itemValue)=>setGender(itemValue)}>
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
                </View>
                </View>
                
                {/* <View style={{width:'100%',marginTop:10}}><Text style={{fontSize:18,fontWeight:'bold'}}>I am a: </Text></View> 
                
            <View style={{width:'100%'}}>
                <RadioButton.Group
                    value={value}
                    onValueChange={value => setValue(value)} >
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <RadioButton.Item position='leading' label="Customer " value="first" />
                   <RadioButton.Item position='leading' label="Collector" value="second"  />
                   </View>
                </RadioButton.Group>
                </View> */}

                <View style={{width:'100%'}}><ButtonComp title="SIGNUP" onPress={signUp}></ButtonComp></View>
             <View style={{flex:1,marginTop:15,alignItems:'center',justifyContent:'flex-end'}}>
                 <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                 <Text style={{ fontSize:15, color:'#2D3033'}}>Don`t have an account? Login</Text></TouchableOpacity></View>
            </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        paddingTop:40,
        paddingBottom:40,
        paddingLeft:50,
        paddingRight:50
    },
    inputContainer: {
        borderWidth:1,
        height:58,
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row',
        marginTop:10,
        marginLeft:10,
        marginRight:10
      },
      input:{
        width:'100%',
        marginLeft:8,
        marginRight:8,
        fontSize:15
    },
    error:{
        width:'100%',
        color:'red',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
})

