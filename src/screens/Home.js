import { NavigationContainer } from '@react-navigation/native'
import React,{useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgUri } from 'react-native-svg'
import colors from '../constants/colors'
import GlobalFont from 'react-native-global-font'
import Icon from  'react-native-vector-icons/FontAwesome'
import MenuItem from '../components/MenuItem'
import ButtonComp from '../components/ButtonComp'

const Home = (props) => {

    const user=props.route.params.json;
 
    
    return (
        <ScrollView style={{flexGrow:1,backgroundColor:'white'}}>
        <View style={{flex:1}}>
            <View style={{backgroundColor:'#0691F8',padding:25}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:27,marginBottom:10,marginTop:10,paddingLeft:15,fontFamily:'DMSans-Medium'}}>Welcome ,{user.firstName}</Text>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Login")} style={{backgroundColor:colors.secondary,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,alignItems:'center'}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                        <Text style={{textAlign:'center',color:'white'}}>Logout</Text></View>
                    </TouchableOpacity>
                    </View>
                </View>
                <Text  style={{color:'white',fontSize:36,paddingLeft:15}}>$7,42000</Text>
                <Text  style={{color:'white',fontSize:15,marginBottom:20,marginTop:6,fontFamily:'DMSans-Medium'}}>Available balance</Text>
                <View style={{backgroundColor:'white',paddingBottom:12,width:'100%',flexDirection:'row'}}>
                  <View style={{flex:1,margin:24}}>
                      <View style={{marginLeft:25}}>
                    <Text style={{fontSize:11}}>Sent</Text>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                          <Image source={require('../assets/images/oval.jpg')}></Image>
                          <Text style={{fontSize:24,marginLeft:8}}>$100,46</Text>
                          </View>
                    </View>
                    <View style={{alignItems:'flex-start',margin:23,flex:1}}>
                    <View style={{marginLeft:25}}>                        
                    <Text style={{fontSize:11}}>Recieved</Text>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                    <Image source={require('../assets/images/blueoval.jpg')}></Image>
                    <Text style={{fontSize:24,marginLeft:8}}>$107,73</Text>
                    </View>
                    </View>
                </View>
            </View>

        <View style={{flex:1,padding:9}}>
            <View style={{marginTop:25,marginBottom:15,marginLeft:5}}><Text style={{fontSize:26}}>Menu</Text></View>

            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginRight:8,marginBottom:8}}>
                 <MenuItem 
                  title="MANAGE FUNDS" onPress="ManageFunds" uri={require('../assets/images/money.png')}></MenuItem>
                 <MenuItem 
                  title="MANAGE CUSTOMER" onPress="ManageCustomer" uri={require('../assets/images/useritem.png')}></MenuItem>
                 <MenuItem 
                  title={"MANAGE \n SUBSCRIPTION"} onPress="Subscription" uri={require('../assets/images/awesomlist.png')}></MenuItem>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginRight:8}}>
                <MenuItem 
                 title={"COLLECTIONS \n"} onPress="Collection" uri={require('../assets/images/bookmark.png')}></MenuItem>
                <MenuItem 
                 title="GENERATE REPORT" onPress="Report" uri={require('../assets/images/growth.png')}></MenuItem>
               <MenuItem 
                 title={"SETTING \n"} onPress="Profile" uri={require('../assets/images/setting.png')}></MenuItem>
                </View>

             </View>

            <View style={{flex:1,flexDirection:'row',paddingTop:15}}>

                <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("DepositByCollector")}  style={{backgroundColor:'#0691F8',width:158,padding:11,alignItems:'center'}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                        <Image source={require('../assets/images/remove.png')} style={{height:21,width:21}}></Image>
                       <Text style={{textAlign:'center',color:'white',marginLeft:10}}>Deposit{'\n'} by Collector</Text></View>
                    </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("DepositByCusotmer")} style={{backgroundColor:colors.secondary,width:158,padding:11,alignItems:'center'}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                        <Image source={require('../assets/images/add.png')} style={{height:21,width:21}}></Image>
                        <Text style={{textAlign:'center',color:'white',marginLeft:10}}>Deposit{'\n'} by Customer</Text></View>
                    </TouchableOpacity>
                    </View>
               </View>
         </View>
     </View>
    </ScrollView>
    )
}
const styles=StyleSheet.create(
    {
        text:{
            color:'white',
        },
        menuItemText:{
            textAlign:'center',
            fontSize:12
        },
        iconBackground:{
            backgroundColor:colors.primary,
            alignItems:'center',
            justifyContent:'center',
            height:40,
            width:40,
            borderRadius:7,
            marginBottom:8
        },
        menuItem:{
            borderWidth:1,
            padding:10,
            borderColor:'#0691F8',
            width:100,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)
export default Home
