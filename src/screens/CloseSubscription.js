import React,{useState} from 'react'
import { View, Text,Modal,Image,StyleSheet,TextInput,ScrollView, TouchableOpacity, FlatList, Picker } from 'react-native'
import { BottomSheet } from 'react-native-btr';
import Icon from 'react-native-ionicons';
import { Searchbar } from 'react-native-paper';
import ButtonComp from '../components/ButtonComp';
import colors from '../constants/colors';

const CloseSubscription = () => {
    const DATA=[
        {
            id:1,Label:'Customer 1',Duration:'1 month',EndDate:'active', Code:'1000',EndDate:'10-14-2021'
        },
        {
            id:2,Label:'Customer 2',Duration:'2 month',EndDate:'Inactive', Code:'2000',EndDate:'10-14-2021'
        },
        {
            id:3,Label:'Customer 3',Duration:'1 month',EndDate:'active', Code:'2000',EndDate:'10-14-2021'
        },
        {
            id:4,Label:'Customer 4',Duration:'2 month',EndDate:'Inactive', Code:'1000',EndDate:'10-14-2021'
        },
        {
            id:5, Label:'Customer 5',Duration:'1 month',EndDate:'active', Code:'1000',EndDate:'10-14-2021'
        },
        {
            id:6,Label:'Customer 6',Duration:'1 month',EndDate:'Inactive', Code:'1000',EndDate:'10-14-2021'
        },
        {
            id:7,Label:'Customer 7',Duration:'1 month',EndDate:'active', Code:'1000',EndDate:'10-14-2021'
        },
        {
            id:8,Label:'Customer 8',Duration:'1 month',EndDate:'Inactive', Code:'1000',EndDate:'10-14-2021'
        },
    ];

    const[visibility,setVisibility]=useState(false);
    const [data,setData]=useState(DATA);
    const [edtModifyCode,setedtModifyCode]=useState('');
    const [edtModifyDescription,setedtModifyDescription]=useState('');
    const[searchbarValue,setsearchbarValue]=useState('');
    const[Modelvisibility,setModelvisibility]=useState(false);
    const[ModifybtmSheetVisibility,setModifybtmSheetVisibility]=useState(false);
    function toggleModifybtmSheet(id)
{
    if(ModifybtmSheetVisibility==true)
    setModifybtmSheetVisibility(false)
    else
    {
        setModifybtmSheetVisibility(true)
        if(id!=null)
        {
        const editCustomer=DATA.find((customer)=>
        customer.id===id)
        setedtModifyCode(editCustomer.Code)
        setedtModifyDescription(editCustomer.Duration)
        }
        
    }
}
    function toggleBottomSheet()
    {
        if(visibility==true)
        setVisibility(false)
        else
        setVisibility(true)
    }
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
   function search(text)
   {
       const data=DATA.filter((item)=>item.Code.includes(text));
       setData(data);
       setsearchbarValue(text)
   }
 return (
    <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:'white'}} stickyHeaderIndices={[1]}>
  
           <View style={{backgroundColor:'#0691F8',padding:35,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
             <Icon name="remove" size={25} color="white" ></Icon>
             <Text style={{color:'white',marginLeft:20,fontSize:20,marginBottom:20,marginTop:20}}>Close Subscription</Text>
         </View>

        <View> 
        <Searchbar
        value={searchbarValue}
  placeholder="Search"
  onChangeText={(text)=>search(text)}    /></View>
  
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:15,marginRight:10}}>
         <Text 
        style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
         Label </Text>
         <Text 
        style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
         Duration </Text>
         <Text 
        style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
         End Date </Text>
         <Text 
        style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
         Action </Text>
         </View>

        <FlatList
     data={data}
     renderItem={({item})=>
     <TouchableOpacity onPress={()=>navigation.navigate("SubscriptionDetail",{item})}>
         <View style={{flexDirection:'row',borderBottomWidth:1,marginLeft:25,marginBottom:10,marginTop:10,marginRight:25,padding:10,justifyContent:'space-between'}}>
             <Text style={{color:'black'}}>{item.Label}</Text>
             <Text>{item.Duration}</Text>
             <Text>{item.EndDate}</Text>
             <Icon name="checkbox" size={20} color="#0691F8" /></View>
             </TouchableOpacity>}
   keyExtractor={item=>item.id}>
   </FlatList>

    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:25}}>
        <View style={{width:100}}>
            <TouchableOpacity onPress={()=>toggleBottomSheet()} style={styles.container}>
            <Icon name="plus" color="white" size={20} style={{marginLeft:5}}></Icon>
            <Text style={styles.text} >Add</Text></TouchableOpacity>
            </View>
            </View>
            
            <BottomSheet
        visible={visibility}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet} >
     <View style={{backgroundColor:'white',padding:30}}>
         <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Add Subscription</Text></View>
         <View><TextInput placeholder="Code" style={{borderWidth:1,padding:15,marginBottom:15}}/><TextInput placeholder="Label" style={{borderWidth:1,padding:15,marginBottom:15}}/><TextInput placeholder="Duration" style={{borderWidth:1,padding:15,marginBottom:15}}/></View>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
            <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Currency: </Text>
             <View style={{width:200,paddingLeft:26,marginTop:15,marginBottom:15,marginLeft:10,borderWidth:1}}>
             <Picker style={{color:'grey'}} >
             <Picker.Item label="Euro" value="Euro" />
              <Picker.Item label="Xof" value="Xof" />
            </Picker>
            </View>
            </View>
         <View><TextInput placeholder="Scale" style={{borderWidth:1,padding:15,marginBottom:15}}/></View>
         <View style={{alignItems:'center'}}><View style={{width:150}}><ButtonComp title="Add"></ButtonComp></View></View>
     </View>
     </BottomSheet>

     
<BottomSheet
visible={ModifybtmSheetVisibility}
onBackButtonPress={toggleModifybtmSheet}
onBackdropPress={toggleModifybtmSheet} >
<View style={{backgroundColor:'white',padding:30}}>
<View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Modify Fund</Text></View>
<View><TextInput value={edtModifyCode} placeholder="Code" style={{borderWidth:1,padding:15,marginBottom:12}}/></View>
<View><TextInput value={edtModifyDescription} placeholder="Add Description / Label" multiline={true} style={{borderWidth:1,padding:15,marginBottom:12,height:110}}/></View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
            <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Currency: </Text>
             <View style={{width:210,paddingLeft:26,marginTop:15,marginLeft:10,borderWidth:1}}>
             <Picker style={{color:'grey'}} >
             <Picker.Item label="Euro" value="Euro" />
              <Picker.Item label="Xof" value="Xof" />
            </Picker>
            </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
            <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Status: </Text>
             <View style={{width:210,paddingLeft:26,marginTop:15,marginLeft:10,borderWidth:1}}>
             <Picker style={{color:'grey'}} >
             <Picker.Item label="Open" value="Open" />
              <Picker.Item label="Close" value="Close" />
            </Picker>
            </View>
            </View>
<View style={{alignItems:'center'}}><View style={{width:150}}><ButtonComp title="Update" type="secondary"></ButtonComp></View></View>
</View>
</BottomSheet>

     <Modal
     animationType="slide"
     transparent={true}
     visible={Modelvisibility}
     onRequestClose={()=>setModelvisibility(false)}
     style={{alignItems:'center',justifyContent:'center'}}>
         <View style={{backgroundColor:'white',marginTop:'50%',marginLeft:60,marginRight:60,padding:30,justifyContent:'center',alignItems:'center'}}>
         <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Conform Delete</Text></View>
         <View><Image source={require('../assets/images/info.jpg')} style={{height:90,width:90}}></Image></View>
         <View style={{alignItems:'center'}}><View style={{width:150,flexDirection:'row',margin:20,justifyContent:'space-between'}}>
             <ButtonComp title="Yes" type="default"></ButtonComp><ButtonComp title="No" type="primary"></ButtonComp></View></View>
     </View>
     </Modal>
      </ScrollView>
      
    )
}
const styles=StyleSheet.create(
    {
        container:{
            width:'100%',
            backgroundColor:'#FB931D',
            alignItems:'center',
            justifyContent:'center',
            marginTop:25,
            flexDirection:'row'
        },
        text:{
            fontSize:20,
            padding:15,
            color:'white'
        },
        statusBackground:{
            backgroundColor:colors.secondary,
            textAlign:'center',
            width:60,
            padding:5,
            fontSize:13,
            borderRadius:10,
            color:'white'
        },
    }
)

export default CloseSubscription
