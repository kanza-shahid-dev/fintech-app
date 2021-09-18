import React,{useState} from 'react'
import { View,Text,Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonComp from '../components/ButtonComp'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HeaderBanner from '../components/HeaderBanner';

function Profile() {
  const [visiblity,setVisibility]=useState(false);
  const [Expirydate, setExpirydate] = useState('');
  const handleDateSelected=(date)=>
  {
      var selected=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
      setExpirydate(selected.toString());
  }

  useEffect(()=>{

   

  },[])
  
 
    return (
       <ScrollView
     contentContainerStyle={{flexGrow:1}}>
      <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
     
        <View>
         <HeaderBanner title={"PROFILE"} icon={ <Image source={require('../assets/images/usercircle.png')} style={{height:40,width:40}}></Image>  }></HeaderBanner>
       </View>
        
          <View style={{alignItems:'center',marginTop:30}}>
            <Image source={require('../assets/images/boyimage.jpg')} style={{height:160,width:160,borderRadius:13}}></Image>
          </View>
          <View style={{paddingLeft:20,paddingRight:20,marginLeft:25,marginRight:25}}>
                <View style={styles.inputContainer}>
                <Icon name="user" size={20} color={"grey"}/>
                <TextInput placeholder="User Name" style={{padding:10,fontSize:15}}/>
                </View>
                <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color={"grey"}/>
                <TextInput placeholder="Email" style={{padding:10,fontSize:15}}/>
                </View>
                <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color={"grey"}/>
                <TextInput secureTextEntry={true} placeholder="Password" style={{padding:10,fontSize:15}}/>
                </View>
              <Text style={{fontSize:17,fontWeight:'bold',marginTop:1,textAlign:'center'}}>Add National ID card</Text>
              <View style={[styles.inputContainer,{height:90,alignItems:'center',justifyContent:'center'}]} >
              <Image source={require('../assets/images/upload.png')}></Image>
               </View>

                  <TouchableOpacity onPress={()=>setVisibility(true)}>
                  <View style={styles.inputContainer}>
                <Icon name="calendar" size={20} color={"grey"}/>
                <TextInput editable={false} value={Expirydate} placeholder="Enter Expiry Date"  style={{paddingLeft:10}}/>
                 </View>
                 </TouchableOpacity>
                 <DateTimePickerModal
            isVisible={visiblity}
            onConfirm={(date)=>handleDateSelected(date)}
            onCancel={()=>setVisibility(false)}></DateTimePickerModal>
          </View>

              <View style={{marginBottom:50,marginLeft:30,marginRight:30,flex:1,justifyContent:'flex-end'}}>
              <ButtonComp title="UPDATE" onPress="ActionSucess"></ButtonComp>
              </View>
      </View>
      </ScrollView>
    )
}
const styles=StyleSheet.create(
    {
        input:{
            borderWidth:1,
            borderColor:'black',
            borderRadius:8,
            height:58,
            padding:20,
            marginTop:20,
            color:'black'
        },
        inputContainer: {
            borderWidth:1,
            alignItems:'center',
            paddingLeft:20,
            height:58,
            paddingRight:20,
            flexDirection: 'row',
            marginTop:15,
            marginBottom:5,
            marginLeft:5,
            marginRight:5,
        },
    }
)

export default Profile
