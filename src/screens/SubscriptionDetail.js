import React,{useState} from 'react'
import { View, Text, Image,StyleSheet, ScrollView, Picker, TextInput, Modal, TouchableOpacity, Button } from 'react-native'
import { BottomSheet } from 'react-native-btr';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonComp from '../components/ButtonComp';
import HeaderBanner from '../components/HeaderBanner';
import colors from '../constants/colors';
import ManageSubscriptionSheet from './ManageSubscriptionSheet';

const SubscriptionDetail = (props) => {
    let Subscription;
    if(props.route.params!=null)
    {
        Subscription=props.route.params.item;
    }
    else{
        Subscription={
            id:1,Name:'Customer 1',Duration:'1 month',Status:'Active', Code:'1000',NoOfSibscription:'10-14-2021'
        };
    }
  

    const[statusPickerValue,setstatusPickerValue]=useState('Open');
    const[ModifybtmSheetVisibility,setModifybtmSheetVisibility]=useState(false);
    const [edtModifyCode,setedtModifyCode]=useState('');
    const [edtModifyLabel,setedtModifyLabel]=useState('');
    const [edtModifyDuration,setedtModifyDuration]=useState('');
    function toggleModifybtmSheet()
    {
        if(ModifybtmSheetVisibility==true)
        setModifybtmSheetVisibility(false)
        else
        {
            setModifybtmSheetVisibility(true)
            if(Subscription.id!=null)
            {
          
            setedtModifyCode(Subscription.Code)
            setedtModifyDuration(Subscription.Duration)
            setedtModifyLabel(Subscription.Name);
            }
            
        }
    }
    const[Modelvisibility,setModelvisibility]=useState(false);

    function toggleModel()
    {
        if(Modelvisibility==true)
        setModelvisibility(false)
        else
        setModelvisibility(true)   
    }
    function getstatusColor(Status)
    {
    if(Status=="Inactive")
    {
        return colors.primary
    }
    else
    return colors.secondary
  
   }
    return (
        <ScrollView style={{flexGrow:1,backgroundColor:'white'}}>
    
    <HeaderBanner title={"Subscription Detail"} icon={ <Icon name="list" color="white" size={30}></Icon> }></HeaderBanner>

     <View style={{margin:20}}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <View><Text style={styles.heading}>Customer Name </Text></View>
           <View style={{justifyContent:'center',alignItems:'center'}}>
           <Text style={[styles.statusBackground,{backgroundColor:getstatusColor(Subscription.Status)}]}>{ Subscription.Status}</Text></View>
      </View>
      <Text style={styles.text}>{Subscription.Name}</Text>
            
      <Text 
     style={styles.heading}>   
      Duration </Text>
      <Text style={styles.text}>{Subscription.Duration}</Text>
      <Text 
     style={styles.heading}>   
      Code : </Text>
      <Text style={styles.text}>{Subscription.Code}</Text>
      <Text 
     style={styles.heading}>   
      Phone No : </Text>
      <Text style={styles.text}>{Subscription.Duration}</Text>

      <Text 
     style={styles.heading}>   
      Product Name : </Text>
      <Text style={styles.text}>{Subscription.Duration}</Text>

      <Text 
     style={styles.heading}>   
      Starting Date : </Text>
      <Text style={styles.text}>{Subscription.Duration}</Text>

      </View>

      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:25}}>
        <View style={{width:150}}>
                <TouchableOpacity onPress={()=>toggleModifybtmSheet()} style={[styles.primaryButton,{flexDirection:'row',justifyContent:'center'}]}>
                <Image source={require('../assets/images/remove.png')} style={{height:21,width:21}}></Image>
                  <Text style={styles.buttonText} >Modify</Text></TouchableOpacity>
                </View>
                <View style={{width:150}}>
                <TouchableOpacity onPress={()=>toggleModel()} style={[styles.secondaryButton,{flexDirection:'row',justifyContent:'center'}]}>
                <Image source={require('../assets/images/cross.png')} style={{height:18,width:18}}></Image>
                 <Text style={styles.buttonText} >Delete</Text></TouchableOpacity>
                </View>
         </View>
      
  
      <Modal
         animationType="slide"
         transparent={true}
         visible={Modelvisibility}
         onRequestClose={()=>setModelvisibility(false)}
         style={{alignItems:'center',justifyContent:'center'}}>
             <View style={{backgroundColor:'white',marginTop:'50%',marginLeft:60,marginRight:60,padding:30,justifyContent:'center',alignItems:'center'}}>
             <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Conform Delete</Text></View>
             <View><Image source={require('../assets/images/info.jpg')} style={{height:90,width:90}}></Image></View>
             
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <View style={{flex:1,margin:10,marginTop:15}}>
                 <ButtonComp type="secondary" title="Yes" onPress="Subscription"></ButtonComp>
                 </View>
             <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>setModelvisibility(false)} style={[styles.primaryButton,{flexDirection:'row',justifyContent:'center'}]}>
                <Text style={styles.buttonText} >No</Text></TouchableOpacity>
                </View>
               </View>

         </View>
         </Modal>
         
<BottomSheet
visible={ModifybtmSheetVisibility}
onBackButtonPress={toggleModifybtmSheet}
onBackdropPress={toggleModifybtmSheet} >
    <View style={{backgroundColor:'white',padding:30}}>
             <View><Text style={{color:'orange',fontSize:27,fontWeight:'900',marginBottom:20}}>Modify Subscription</Text></View>
             <View>
                 <TextInput value={edtModifyCode} placeholder="Code" style={styles.inputContainer}/>
                 <TextInput value={edtModifyLabel} placeholder="Label" style={styles.inputContainer}/>
                 <TextInput value={edtModifyDuration} placeholder="Duration" style={styles.inputContainer}/></View>
             <View style={{flexDirection:'row',marginBottom:15,alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
                <Text style={{fontSize:20,color:'grey'}}>Select {'\n'}Status: </Text>
                 <View style={{width:200,paddingLeft:26,marginLeft:10,borderWidth:1}}>
                 <Picker style={{color:'grey'}}
                 selectedValue={statusPickerValue} >
                 <Picker.Item label="Open" value="Open" />
                  <Picker.Item label="Close" value="Close" />
                </Picker>
                </View>
                </View>
             <View><TextInput placeholder="Duration" style={styles.inputContainer}/></View>
             <View style={{alignItems:'center'}}>
                 <View style={{width:150}}>
                 <ButtonComp onPress="SubscriptionDetail" title="Modify" type="primary"
                 icon={<Image source={require('../assets/images/remove.png')} style={{height:21,width:21}}></Image> }></ButtonComp>
                 </View>
                 </View>
         </View>
</BottomSheet>


      </ScrollView>
    )
}

const styles=StyleSheet.create({
    heading:{
        color:'#0691F8',
        marginTop:3,
        marginLeft:17,
        fontWeight:'bold',
        fontSize:24
    },
    secondaryButton:{
        width:'100%',
        backgroundColor:'#FB931D',
        alignItems:'center',
        justifyContent:'center',
        marginTop:25,
        flexDirection:'row'
    },
    primaryButton:{
        width:'100%',
        backgroundColor:'#0691F8',
        alignItems:'center',
        justifyContent:'center',
        marginTop:25,
        flexDirection:'row'
    },
    inputContainer:{
        borderWidth:1,
        padding:15,
        marginBottom:15,
        height:58,
        fontSize:17,
    },
    buttonText:{
        fontSize:20,
        padding:15,
        color:'white',
    },
       
    text:{
        fontSize:24,
        marginLeft:44,
        marginTop:5,
        marginBottom:5,
        fontWeight:'900',
        color:'black'
    },
    statusBackground:{
        backgroundColor:colors.secondary,
        textAlign:'center',
        width:60,
        height:30,
        padding:5,
        fontSize:14,
        borderRadius:10,
        color:'white'
    },
})

export default SubscriptionDetail
