import React,{useState,useEffect} from 'react'
import { View, Text, TextInput, Picker } from 'react-native'
import { BottomSheet } from 'react-native-btr'
import ButtonComp from '../components/ButtonComp'

const ManageSubscriptionSheet = () => {

    const[ModifybtmSheetVisibility,setModifybtmSheetVisibility]=useState(true);
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
            setedtModifyDescription(editCustomer.Duration)
            }
        }
    }
    return (
<View>
        <BottomSheet
         visible={ModifybtmSheetVisibility}
         onBackButtonPress={toggleModifybtmSheet}
         onBackdropPress={toggleModifybtmSheet} >
  <View style={{backgroundColor:'white',padding:30}}>
  <View><Text style={{color:'orange',fontSize:25,fontWeight:'900',marginBottom:20}}>Modify Subscription</Text></View>
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

  <View style={{alignItems:'center'}}>
      <View style={{width:150}}><ButtonComp title="Update" type="secondary" ></ButtonComp></View>
  </View>
</View>
</BottomSheet>
</View>
    )
}

export default ManageSubscriptionSheet
