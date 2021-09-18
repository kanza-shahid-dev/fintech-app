import React,{useState} from 'react'
import { View, Text, StyleSheet,Image,TextInput, ScrollView, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonComp from '../components/ButtonComp'
import {launchCamera, launchImageLibrary,showImagePicker} from 'react-native-image-picker';
import { BottomSheet } from 'react-native-btr';

export default function AddCard() {
    const [visiblity,setVisibility]=useState(false);
    const [birthdate, setBirthdate] = useState('');
    const [modelVisibility,setmodelVisibility]=useState(false);
    const [ImageSource,setImageSource]=useState('https://static.thenounproject.com/png/125166-200.png');
    
   
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
    return (
        <ScrollView  contentContainerStyle={{flexGrow:1}}>
            <View style={styles.container}> 
            <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',marginBottom:50}}>Add National ID card</Text>
        
        <TouchableOpacity onPress={()=>setmodelVisibility(true)}>
            <View style={{height:350,borderWidth:1,width:'100%',alignItems:'center',justifyContent:'center'}}>
               <Image source={{uri: ImageSource}} style={{height:'100%',width:'100%'}}></Image>
            </View>
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
        <View style={{flex:1,width:'100%',marginTop:25}}>
            <DateTimePickerModal
            isVisible={visiblity}
            onConfirm={(date)=>handleDateSelected(date)}
            onCancel={()=>setVisibility(false)}
            ></DateTimePickerModal>
            
            <TouchableOpacity onPress={()=>setVisibility(true)}>
        <View style={styles.inputContainer}>
                <Icon name="calendar" size={20} color={"grey"}/>
                <TextInput editable={false} value={birthdate} placeholder="Enter Expiry Date" style={styles.input}/>
            </View>
            </TouchableOpacity>

        </View>
        <View style={{width:'100%',justifyContent:'flex-end'}}>
        <View style={{justifyContent:'flex-end'}}><ButtonComp title="CONTINUE TO HOME" onPress="Home"></ButtonComp></View>
        </View>
        </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:55,
    },
    inputContainer: {
        borderWidth:1,
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row',
        marginLeft:5,
        marginRight:5,
        height:58,
    },
      input:{
        width:'100%',
        marginLeft:8,
        marginRight:8,
        fontSize:15

    },
})