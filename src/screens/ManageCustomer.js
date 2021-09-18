import React,{useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, Image } from 'react-native'
import ButtonComp from '../components/ButtonComp';
import {BottomSheet} from 'react-native-btr';
import colors from '../constants/colors';
import { Searchbar } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBanner from '../components/HeaderBanner';

const ManageCustomer = () => {
        const DATA=[
            {
                id:1,Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'03'
            },
            {
                id:2, Name:'Customer', PhoneNo:'7077453',NoOfSibscription:'05'
            },
            {
                id:3, Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'03'
            },
            {
                id:4, Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'03'
            },
            {
                id:5, Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'03'
            },
            {
                id:6, Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'03'
            },
            {
                id:7,Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'03'
            },
            {
                id:8,Name:'Customer', PhoneNo:'12077453',NoOfSibscription:'04'
            },
        ];

        const [data,setData]=useState(DATA);
        const [edtModifyName,setedtModifyName]=useState('');
        const [edtModifyPhone,setedtModifyPhone]=useState('');
        const[searchbarValue,setsearchbarValue]=useState('');
        const[visibility,setVisibility]=useState(false);
        const[ModifybtmSheetVisibility,setModifybtmSheetVisibility]=useState(false);
        function toggleAddbtmSheet()
        {
            if(visibility==true)
            setVisibility(false)
            else
            setVisibility(true)
        }
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
                setedtModifyName(editCustomer.Name)
                setedtModifyPhone(editCustomer.PhoneNo)
            }
            }
        }
        function search(text)
        {
            const data=DATA.filter((item)=>item.PhoneNo.includes(text));
            setData(data);
            setsearchbarValue(text)
        }
     return (
         <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{flexGrow:1}} stickyHeaderIndices={[1]}>
               
               <View>
               <HeaderBanner title={"Manage Customer"} icon={  <Image source={require('../assets/images/home.png')} style={{height:30,width:32}}></Image>  }></HeaderBanner>
               </View>
               
               <View >
                <Searchbar
            value={searchbarValue}
      placeholder="Search"
      onChangeText={(text)=>search(text)}    />
       </View>
         
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:15,marginRight:10}}>
            <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:20,textAlign:'center'}}>   
             Name </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:20,textAlign:'center'}}>   
             Phone No </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:20,textAlign:'center'}}>   
             No of {'\n'} Subscription </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:20,textAlign:'center'}}>   
             Edit </Text>
             </View>         
          
             <FlatList
         data={data}
         renderItem={({item})=>
         <TouchableOpacity onPress={()=>toggleModifybtmSheet(item.id)}>
             <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:colors.customegrey,marginLeft:25,marginBottom:10,marginTop:10,marginRight:25,padding:10,justifyContent:'space-between'}}>
                 <Text style={{fontSize:18}}>{item.Name}</Text>
                 <Text style={{fontSize:18}}>{item.PhoneNo}</Text>
                 <Text style={{fontSize:18}}>{item.NoOfSibscription}</Text>
                 <Icon name="edit" size={15} color="#0691F8"></Icon>
            </View>
                 </TouchableOpacity>}
       keyExtractor={item=>item.id}>
       </FlatList>
           
         
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:25}}>
        <View style={{width:150}}>
                <TouchableOpacity onPress={()=>toggleAddbtmSheet()} style={[styles.container,{flexDirection:'row',justifyContent:'center'}]}>
                <Image source={require('../assets/images/add.png')} style={{height:21,width:21}}></Image>
                  <Text style={styles.text} >Add</Text></TouchableOpacity>
                </View>
         </View>

                <BottomSheet
            visible={visibility}
            onBackButtonPress={toggleAddbtmSheet}
            onBackdropPress={toggleAddbtmSheet} >
         <View style={{backgroundColor:'white',padding:30}}>
             <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Add Customer</Text></View>
             <View><TextInput placeholder="Name" style={{borderWidth:1,padding:15,marginBottom:15}}/><TextInput placeholder="Phone No" style={{borderWidth:1,padding:15,marginBottom:5}}/></View>
             <View style={{alignItems:'center'}}><View style={{width:150}}><ButtonComp title="Add" onPress="ManageCustomer"></ButtonComp></View></View>
         </View>
         </BottomSheet>
         <BottomSheet
            visible={ModifybtmSheetVisibility}
            onBackButtonPress={toggleModifybtmSheet}
            onBackdropPress={toggleModifybtmSheet} >
         <View style={{backgroundColor:'white',padding:30}}>
             <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Edit Customer</Text></View>
             <View><TextInput value={edtModifyName} placeholder="Name" style={{borderWidth:1,padding:15,marginBottom:15}}/>
             <TextInput  value={edtModifyPhone} placeholder="Phone No" style={{borderWidth:1,padding:15,marginBottom:5}}/></View>
             <View style={{alignItems:'center'}}><View style={{width:150}}><ButtonComp title="Edit" onPress="ManageCustomer"></ButtonComp></View></View>
         </View>
         </BottomSheet>
          </ScrollView>
          
        )
    }
    const styles=StyleSheet.create(
        {
            container:{
                width:'100%',
                backgroundColor:'#FB931D',
                alignItems:'center',
                marginTop:25
            },
            text:{
                fontSize:20,
                padding:15,
                color:'white',
               
            }
        }
    )
        export default ManageCustomer
