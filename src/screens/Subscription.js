import React,{useState} from 'react'
import { View, Text,ScrollView, Image, FlatList, TouchableOpacity, TextInput, StyleSheet, Modal, Picker } from 'react-native'
import { BottomSheet } from 'react-native-btr';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonComp from '../components/ButtonComp';
import colors from '../constants/colors';
import { Searchbar } from 'react-native-paper';
import HeaderBanner from '../components/HeaderBanner';

const Subscription = ({navigation}) => {
        const DATA=[
            {
                id:1,Name:'Customer 1',Duration:'1 month',Status:'Active', Code:'1000',NoOfSibscription:'10-14-2021'
            },
            {
                id:2, Name:'Customer 2',Duration:'2 month',Status:'Inactive', Code:'2000',NoOfSibscription:'10-14-2021'
            },
            {
                id:3, Name:'Customer 3',Duration:'1 month',Status:'Active', Code:'2000',NoOfSibscription:'10-14-2021'
            },
            {
                id:4, Name:'Customer 4',Duration:'2 month',Status:'Inactive', Code:'1000',NoOfSibscription:'10-14-2021'
            },
            {
                id:5, Name:'Customer 5',Duration:'1 month',Status:'Active', Code:'1000',NoOfSibscription:'10-14-2021'
            },
            {
                id:6, Name:'Customer 6',Duration:'1 month',Status:'Inactive', Code:'1000',NoOfSibscription:'10-14-2021'
            },
            {
                id:7,Name:'Customer 7',Duration:'1 month',Status:'Active', Code:'1000',NoOfSibscription:'10-14-2021'
            },
            {
                id:8,Name:'Customer 8',Duration:'1 month',Status:'Inactive', Code:'1000',NoOfSibscription:'10-14-2021'
            },
        ];

        const[visibility,setVisibility]=useState(false);
        const [data,setData]=useState(DATA);
        const[searchbarValue,setsearchbarValue]=useState('');
        const[statusPickerValue,setstatusPickerValue]=useState('Open');
   
        function toggleBottomSheet()
        {
            if(visibility==true)
            setVisibility(false)
            else
            setVisibility(true)
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
      
             <HeaderBanner title={"Subscription"} icon={  <Image source={require('../assets/images/awesomlist.png')} style={{height:30,width:32}}></Image> }></HeaderBanner>

            <View> 
            <Searchbar
            value={searchbarValue}
      placeholder="Search"
      onChangeText={(text)=>search(text)}    /></View>
      
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:15,marginRight:10}}>
            <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
             Code </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
             Label </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
             Duration </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
             Status </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:15,textAlign:'center'}}>   
             Action </Text>
             </View>

            <FlatList
         data={data}
         renderItem={({item})=>
         <TouchableOpacity onPress={()=>navigation.navigate("SubscriptionDetail",{item})}>
             <View style={{flexDirection:'row',borderBottomWidth:1,marginLeft:25,marginBottom:10,marginTop:10,marginRight:25,padding:10,justifyContent:'space-between'}}>
                 <Text>{item.Code}</Text>
                 <Text>{item.Name}</Text>
                 <Text>{item.Duration}</Text>
                 <Text style={[styles.statusBackground,{backgroundColor:getstatusColor(item.Status)}]}>{ item.Status}</Text>
                 <Image source={require('../assets/images/eye.png')}></Image></View>
                 </TouchableOpacity>}
       keyExtractor={item=>item.id}>
       </FlatList>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:25}}>
            <View style={{width:150}}>
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
             <View><Text style={{color:'orange',fontSize:27,fontWeight:'900',marginBottom:20}}>Add Subscription</Text></View>
             <View>
                 <TextInput placeholder="Code" style={styles.inputContainer}/>
                 <TextInput placeholder="Label" style={styles.inputContainer}/>
                 <TextInput placeholder="Duration" style={styles.inputContainer}/></View>
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
                 <ButtonComp onPress="SubscriptionDetail" title="Add"
                 icon={<Image source={require('../assets/images/add.png')} style={{height:21,width:21}}></Image> }></ButtonComp>
                 </View>
                 </View>
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
                justifyContent:'center',
                marginTop:25,
                flexDirection:'row'
            },
            text:{
                fontSize:20,
                padding:15,
                color:'white'
            },
            inputContainer:{
                borderWidth:1,
                padding:15,
                marginBottom:15,
                height:58,
                fontSize:17,
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
export default Subscription
