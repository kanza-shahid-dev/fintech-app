import React,{useState} from 'react'
import { View,ScrollView, Text,Image, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Picker } from 'react-native'
import { BottomSheet } from 'react-native-btr';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import ButtonComp from '../components/ButtonComp';
import colors from '../constants/colors';
import HeaderBanner from '../components/HeaderBanner';

const ManageFunds = () => {
    const DATA=[
        {
            id:1,Description:'Customer',Currency:'Xof',Status:'OPEN', Code:'1000'
        },
        {
            id:2, Description:'Customer',Currency:'EURO',Status:'CLOSE', Code:'3000'
        },
        {
            id:3, Description:'Customer',Currency:'EURO',Status:'OPEN', Code:'2000'
        },
        {
            id:4, Description:'Customer',Currency:'EURO',Status:'CLOSE', Code:'4000'
        },
        {
            id:5, Description:'Customer',Currency:'Xof',Status:'OPEN', Code:'1000'
        },
        {
            id:6, Description:'Customer',Currency:'EURO',Status:'CLOSE', Code:'1000'
        },
        {
            id:7,Description:'Customer',Currency:'EURO',Status:'OPEN', Code:'1000'
        },
        {
            id:8,Description:'Customer',Currency:'EURO',Status:'CLOSE', Code:'1000'
        },
    ];

    const [CurrencyPickervalue,setCurrencypickervalue]=useState('EURO');
    const[StatusPickervalue,setStatusPickervalue]=useState('Open');
    function getstatusColor(Status)
    {
        if(Status=="OPEN")
        {
            return colors.primary
        }
        else
        return colors.secondary
      
    }
    const[visibility,setVisibility]=useState(false);
    const[Modelvisibility,setModelvisibility]=useState(false);
    function toggleBottomSheet()
    {
        if(visibility==true)
        setVisibility(false)
        else
        setVisibility(true)
    }
    const[ModifybtmSheetVisibility,setModifybtmSheetVisibility]=useState(false);
    const [edtModifyCode,setedtModifyCode]=useState('');
    const [edtModifyDescription,setedtModifyDescription]=useState('');
   
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
            setedtModifyDescription(editCustomer.Description)
            setCurrencypickervalue(editCustomer.Currency);
            setStatusPickervalue(editCustomer.Status);
            }
            
        }
    }
    function toggleModel()
    {
        if(Modelvisibility==true)
        setModelvisibility(false)
        else
        setModelvisibility(true)   
    }
    const [data,setData]=useState(DATA);
    const[searchbarValue,setsearchbarValue]=useState('');
  
    function search(text)
    {
        const data=DATA.filter((item)=>item.Code.includes(text));
        setData(data);
        setsearchbarValue(text)
    }
 
 return (
    <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:'white'}} stickyHeaderIndices={[1]}>
 
      <View>
      <HeaderBanner title={"Manage Funds / Cashies"} icon={ <Image source={require('../assets/images/money.png')} ></Image> }></HeaderBanner>
      </View>

      <View>
 <Searchbar
      value={searchbarValue}
      placeholder="Search"
      onChangeText={(text)=>search(text)}  /></View>
      
 <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:15,marginRight:10}}>
            <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Code </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Description / {'\n'}Label </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Currency </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Status </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Edit </Text>
             </View>
 <FlatList
data={data}
renderItem={({item})=>
<TouchableOpacity onPress={()=>toggleModifybtmSheet(item.id)}>
  <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:colors.customegrey,marginLeft:25,marginBottom:10,marginTop:10,marginRight:25,padding:10,justifyContent:'space-between'}}>
      <Text style={{fontSize:14}} >{item.Code}</Text>
      <Text style={{fontSize:14}}>{item.Description}</Text>
      <Text style={{fontSize:14}}>{item.Currency}</Text>
      <Text style={[styles.statusBackground,{backgroundColor:getstatusColor(item.Status)}]}>{ item.Status}</Text>
      <Icon name="edit" size={15} color="#0691F8"></Icon>
     </View>
     </TouchableOpacity>}
keyExtractor={item=>item.id}
></FlatList>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:25}}>
 <View style={{width:140,alignItems:'center'}}>
     <TouchableOpacity onPress={()=>toggleBottomSheet()} style={styles.container}>
     <Image source={require('../assets/images/add.png')} style={{height:21,width:21}}></Image>
                 <Text style={styles.text} >Add</Text></TouchableOpacity>

     </View>
     </View>
     
     <BottomSheet
 visible={visibility}
 onBackButtonPress={toggleBottomSheet}
 onBackdropPress={toggleBottomSheet} >
<View style={{backgroundColor:'white',padding:30}}>
  <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Add Fund</Text></View>
  <View><TextInput placeholder="Code" style={{borderWidth:1,padding:15,marginBottom:12}}/></View>
  <View><TextInput placeholder="Add Description / Label" multiline={true} style={{borderWidth:1,padding:15,marginBottom:12,height:110}}/></View>
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
                <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Currency: </Text>
                 <View style={{width:200,paddingLeft:26,marginTop:15,marginLeft:10,borderWidth:1}}>
                 <Picker style={{color:'grey'}} >
                 <Picker.Item label="Euro" value="Euro" />
                  <Picker.Item label="Xof" value="Xof" />
                </Picker>
                </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
                <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Status: </Text>
                 <View style={{width:200,paddingLeft:26,marginTop:15,marginLeft:10,borderWidth:1}}>
                 <Picker style={{color:'grey'}} >
                 <Picker.Item label="Open" value="OPEN" />
                  <Picker.Item label="Close" value="CLOSE" />
                </Picker>
                </View>
                </View>
  <View style={{alignItems:'center',marginBottom:5}}><View style={{width:150}}><ButtonComp title="Add" onPress="ManageFunds" icon={<Image source={require('../assets/images/add.png')} style={{height:21,width:21}}></Image> }></ButtonComp></View></View>
</View>
</BottomSheet>

<BottomSheet
 visible={ModifybtmSheetVisibility}
 onBackButtonPress={toggleModifybtmSheet}
 onBackdropPress={toggleModifybtmSheet} >
<View style={{backgroundColor:'white',padding:30}}>
  <View><Text style={{color:'orange',fontSize:27,fontWeight:'900',marginBottom:20}}>Modify Fund</Text></View>
  <View><TextInput value={edtModifyCode} placeholder="Code" style={{borderWidth:1,height:58,fontSize:17,padding:15,marginBottom:12}}/></View>
  <View><TextInput value={edtModifyDescription} placeholder="Add Description / Label" multiline={true} style={{borderWidth:1,fontSize:17,padding:15,marginBottom:12,height:110}}/></View>
    
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
               
                <View style={{flex:1,justifyContent:'center'}}>
                     <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Currency:   </Text>
                 </View>
                 <View style={{flex:2,paddingLeft:26,borderWidth:1}}>
                 <Picker style={{color:'grey'}}
                 selectedValue={CurrencyPickervalue} >
                 <Picker.Item label="Euro" value="Euro" />
                  <Picker.Item label="Xof" value="Xof" />
                </Picker>
                </View>
                </View>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10,justifyContent:'space-between',marginLeft:10}}>
             <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={{fontSize:18,color:'grey'}}>Select {'\n'}Status: </Text>
              </View>
                 <View style={{flex:2,paddingLeft:26,borderWidth:1}}>
                 <Picker style={{color:'grey'}}  
                   selectedValue={StatusPickervalue} >
                 <Picker.Item label="Open" value="OPEN" />
                  <Picker.Item label="Close" value="CLOSE" />
                </Picker>
                </View>
                </View>
  <View style={{alignItems:'center'}}><View style={{width:150}}><ButtonComp onPress="ManageFunds" title="Update" type="primary" icon={ <Image source={require('../assets/images/remove.png')} style={{height:21,width:21}}></Image>}></ButtonComp></View></View>
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
    textAlign:'center',
    width:60,
    padding:5,
    fontSize:13,
    borderRadius:10,
    color:'white'
},
}
)
export default ManageFunds
