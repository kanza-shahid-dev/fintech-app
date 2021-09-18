import React from 'react'
import { View, Text,StyleSheet,Image,TextInput,ScrollView, FlatList, Picker } from 'react-native'
import Icon from 'react-native-ionicons'
import { SvgUri } from 'react-native-svg'
import ButtonComp from '../components/ButtonComp'
import HeaderBanner from '../components/HeaderBanner'

export default function DepositbyCustomer() {
    return (
        <ScrollView style={{backgroundColor:'#FFFFFF'}}   contentContainerStyle={{flexGrow:1}}>
       
       <View>
         <HeaderBanner title={"Deposite \n by Customer"} icon={ <Icon name="add" color="white" size={30}></Icon> }></HeaderBanner>
       </View>

          
          <View style={{flex:1,marginLeft:18,marginRight:18}}>
     <View style={{flexDirection:'row',marginTop:30,alignItems:'center',justifyContent:'center'}}>
                 <View  style={{flex:0}}>
                 <Text style={{fontSize:18,color:'black',marginRight:20}}>Select {'\n'}Subscription :</Text></View>
                 <View style={{flex:1,paddingLeft:2,borderWidth:1}}>
                 <Picker style={{color:'grey'}} >
                 <Picker.Item label="Subscription 1" value="Subscription 1" />
                  <Picker.Item label="Subscription 2" value="Subscription 2" />
                </Picker>
                </View>
        </View>

<View style={styles.inputContainer}>
<TextInput keyboardType="number-pad" placeholder="Enter Phone No"></TextInput>
</View>
<View style={styles.inputContainer}>
<TextInput keyboardType="number-pad"  placeholder="Enter Amount"></TextInput>
</View>

<View style={{alignItems:'flex-end',flex:1,marginBottom:30,justifyContent:'space-between',flexDirection:'row'}}>
               
                 <View style={{flex:1,marginRight:7}}>
                     <ButtonComp keyboardType="number-pad" title="Cancel" onPress="Home" type="primary" icon={<Image source={require('../assets/images/remove.png')} style={{height:21,width:21}}></Image>}></ButtonComp>
                 </View>
                 <View style={{flex:1,marginLeft:7}}>
                     <ButtonComp keyboardType="number-pad" title="Perform" onPress="Sucessful" type="default" icon={<Image source={require('../assets/images/add.png')} style={{height:21,width:21}}></Image>}></ButtonComp>
                 </View>
               
         </View>
</View>
     

   </ScrollView>
 )
}
const styles=StyleSheet.create(
 {
     inputContainer: {
         borderWidth:1,
         alignItems:'center',
         height:58,
         flexDirection: 'row',
         paddingLeft:20,
         paddingRight:20,
         marginTop:23,

     },
    
 }
)