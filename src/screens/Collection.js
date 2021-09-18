import React,{useState} from 'react'
import { View, Text,Image, StyleSheet, ScrollView, FlatList, Picker } from 'react-native'
import { CheckBox } from 'react-native-btr';
import Icon from 'react-native-ionicons';
import HeaderBanner from '../components/HeaderBanner';

const Collection = () => {
    const DATA=[
        {
            No:'1', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'2', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'2', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'3', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'3', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'3', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'3', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
        {
            No:'3', Amount:'1000',EndDate:'10-14-2021',Action:'true'
        },
    ];
    const[toggleCheckBox,setToggleCheckBox]=useState(false);
  
    return (
      <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}} contentContainerStyle={{flexGrow:1}}>
          
        <HeaderBanner title={"Collection"} icon={ <Image source={require('../assets/images/awesomlist.png')} style={{height:30,width:32}}></Image> }></HeaderBanner>
        
        <View style={{flexDirection:'row',marginTop:20,marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:20,color:'black',marginRight:20}}>Select {'\n'}Subscription : </Text>
                 <View style={{width:200,paddingLeft:2,borderWidth:1}}>
                 <Picker style={{color:'grey'}} >
                 <Picker.Item label="Subscription 1" value="Subscription 1" />
                  <Picker.Item label="Subscription 2" value="Subscription 2" />
                </Picker>
                </View>
        </View>

        <Text style={{color:'#0691F8',margin:15,fontWeight:'900',fontSize:21,textAlign:'center'}}>Account Created : 0001003</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:15,marginRight:10}}>
            <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             No </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Amount </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             End Date </Text>
             <Text 
            style={{color:'#0691F8',margin:15,fontWeight:'bold',fontSize:17,textAlign:'center'}}>   
             Action </Text>
             </View>
        <FlatList
     data={DATA}
     renderItem={({item})=>
         <View style={{flexDirection:'row',borderBottomWidth:1,marginLeft:25,marginBottom:10,marginTop:10,marginRight:25,padding:10,justifyContent:'space-between'}}>
             <Text style={{fontSize:14}}>{item.No}</Text>
             <Text style={{fontSize:14}}>{item.Amount}</Text>
             <Text style={{fontSize:14}}>{item.EndDate}</Text>
             <Icon name="checkbox" color="#0691F8" size={20}></Icon>
             </View>}
   keyExtractor={item=>item.No}
     ></FlatList>
    
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

export default Collection
