import React,{useState} from 'react'
import { View,Image, Text, Picker, FlatList, TextInput, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-ionicons'
import { Searchbar } from 'react-native-paper'
import { Header } from 'react-native/Libraries/NewAppScreen'
import ButtonComp from '../components/ButtonComp'
import HeaderBanner from '../components/HeaderBanner'

const DepositbyCollector = () => {
    const DATA=[
        {
            No:'1', Name:'Ali Sanders',ImageSource:'boyimage.jpg',PhoneNo:'+92 33342422'
        },
        {
            No:'2', Name:'Hailey Sanders',ImageSource:'user.jpg',PhoneNo:'+92 45042422'
        },
        {
            No:'3', Name:'Hailey Sanders',ImageSource:'user.jpg',PhoneNo:'+92 30042422'
        },
      
    ];
    const [data,setData]=useState(DATA);
    const[searchbarValue,setsearchbarValue]=useState('');
       
    function search(text)
    {
        const data=DATA.filter((item)=>item.Name.includes(text)||item.PhoneNo.includes(text));
        setData(data);
        setsearchbarValue(text)
    }
    return (
        <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}}   contentContainerStyle={{flexGrow:1}}>
       
     
       <HeaderBanner title={"Deposite \n by Collector"} icon={ <Icon name="add" color="white"></Icon> }></HeaderBanner>

     <View style={{marginTop:10,marginBottom:10,flexDirection:'row',paddingLeft:30,paddingRight:30}}>
        <View style={{flex:1,justifyContent:'center'}}><Text style={{fontSize:20}}>All contacts</Text></View>
        <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
         <Text style={{fontSize:20,marginRight:20}}>or Scan</Text></View>
         <Image source={require('../assets/images/scan.jpg')} style={{height:32,width:32}}></Image>
         
     </View>

     <View style={{marginLeft:30,marginBottom:4,marginRight:30,borderWidth:1}}>
     <Searchbar
            value={searchbarValue}
      placeholder="Search name or number.."
      onChangeText={(text)=>search(text)} 
      fontSize={14}  />
      </View>

      <FlatList
     data={data}
     renderItem={({item})=>
         <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#C8CCCF',marginLeft:25,marginBottom:10,marginTop:1,marginRight:25,padding:10,justifyContent:'space-between'}}>
           <View style={{flex:0,marginBottom:5}}>
            <Image source={require('../assets/images/boyimage.jpg')} style={{height:55,width:55,borderRadius:20}}></Image>
            </View>
            <View style={{flex:1,marginLeft:20,flexDirection:'column',justifyContent:'center'}}>
            <Text style={{fontSize:17}}>{item.Name}</Text>
             <Text style={{color:'grey'}}>{item.PhoneNo}</Text>
            </View>
           
             </View>}
   keyExtractor={item=>item.No}
     ></FlatList>

      <View style={{flexDirection:'row',marginTop:10,paddingLeft:20,paddingRight:20,alignItems:'center',justifyContent:'center'}}>
                
                <View style={{flex:0}}>
                 <Text style={{fontSize:18,color:'black',marginRight:10}}>Select {'\n'}Subscription : </Text></View>
                 <View style={{flex:1,paddingLeft:2,borderWidth:1}}>
                 <Picker style={{color:'grey'}} >
                 <Picker.Item label="Subscription 1" value="Subscription 1" />
                  <Picker.Item label="Subscription 2" value="Subscription 2" />
                </Picker>
                </View>
        </View>

        <View style={{paddingLeft:20,paddingRight:20,marginTop:10,marginBottom:10}}>
                 <Text style={{fontSize:18,marginBottom:10,marginTop:10,color:'black',marginRight:20}}>Amount : </Text>
                 <View style={{paddingLeft:2,borderWidth:1}}>
                 <TextInput keyboardType="number-pad" placeholder="100" fontSize={18} style={{paddingLeft:10,height:55}}></TextInput>
                </View>
        </View>

        <View style={{alignItems:'center',marginBottom:30,paddingLeft:50,paddingRight:50,justifyContent:'center',flexDirection:'row'}}>
                 <View style={{flex:1,margin:12}}>
                     <ButtonComp title="Cancel" onPress="Home"  type="primary" icon={<Image source={require('../assets/images/remove.png')} style={{height:21,width:21}}></Image>}></ButtonComp>
                 </View>
                 <View style={{flex:1}}>
                     <ButtonComp title="Perform" onPress="Sucessful" type="default" icon={<Image source={require('../assets/images/add.png')} style={{height:21,width:21,marginLeft:8}}></Image>}></ButtonComp>
                 </View>
               
         </View>


     </ScrollView>
    )
}

export default DepositbyCollector
