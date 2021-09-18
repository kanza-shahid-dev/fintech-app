import React,{useState} from 'react'
import { View, Text, StyleSheet, Picker, Image, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-ionicons';
import { SvgUri } from 'react-native-svg';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import HeaderBanner from '../components/HeaderBanner';

export default function Report() {
    const DATA=[
        {
            No:'1', Amount:'100$',Time:'00:09 PM \n 10-14-2021',Customer:"Customer \n Name Here"
        },
        {
            No:'2', Amount:'100$',Time:'00:09 PM \n 10-14-2021',Customer:'Customer \n Name Here'
        },
        {
            No:'3', Amount:'100$',Time:'00:09 PM \n 10-14-2021',Customer:'Customer \n Name Here'
        },
        {
            No:'4', Amount:'100$',Time:'00:09 PM \n 10-14-2021',Customer:'Customer \n Name Here'
        },
        {
            No:'5', Amount:'100$',Time:'00:09 PM \n 10-14-2021',Customer:'Customer \n Name Here'
        },
    ];
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [datepickerVisiblity,setdatepickerVisiblity]=useState(false);
    const [date2pickerVisiblity,setdate2pickerVisiblity]=useState(false);
  
    const[toggleCheckBox,setToggleCheckBox]=useState(false);
    const handleStartDateSelected=(date)=>
    {
        var selected=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        setstartDate(selected.toString());
    }
    const handleEndDateSelected=(date)=>
    {
        var selected=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        setendDate(selected.toString());
    }
    return (
      <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}} contentContainerStyle={{flexGrow:1}}>
        
        <View>
      <HeaderBanner title={"Report"} icon={  <Image source={require('../assets/images/money.png')} ></Image>  }></HeaderBanner>
      </View>
      <DateTimePickerModal
            isVisible={datepickerVisiblity}
            onConfirm={(date)=>handleStartDateSelected(date)}
            onCancel={()=>setdatepickerVisiblity(false)}></DateTimePickerModal>
             <DateTimePickerModal
            isVisible={date2pickerVisiblity}
            onConfirm={(date)=>handleEndDateSelected(date)}
            onCancel={()=>setdate2pickerVisiblity(false)}></DateTimePickerModal>
        <View style={styles.DateContainer}>
                <View style={styles.DateContainerHeadingContainer}>
                <Text style={styles.DateContainerHeading}>Select {'\n'}Starting Date :</Text>
                </View>
                 <View style={styles.DateContainerInput}>
                <TouchableOpacity onPress={()=>setdatepickerVisiblity(true)}>
                 <TextInput editable={false} value={startDate} placeholder="00-10-1000" fontSize={18}></TextInput>
           
                </TouchableOpacity>

                </View>
        </View>
        <View style={styles.DateContainer}>
                 <View style={styles.DateContainerHeadingContainer}>
                 <Text style={styles.DateContainerHeading}>Select {'\n'}End Date :</Text>
                 </View>
                 <View style={styles.DateContainerInput}>
                 <TouchableOpacity onPress={()=>setdate2pickerVisiblity(true)}>
                 <TextInput editable={false} value={endDate} placeholder="00-10-1000" fontSize={18} ></TextInput>
                 </TouchableOpacity>
                </View>
        </View>

        <Text style={{color:'#0691F8',marginTop:30,fontWeight:'900',fontSize:25,textAlign:'center'}}>
            Remaining Customer Payments </Text>
        <View style={styles.flexHeadingContainer}>
             <Text 
            style={styles.flexHeading}>   
             Amount </Text>
             <Text 
            style={styles.flexHeading}>   
             Time </Text>
             <Text 
            style={styles.flexHeading}>   
             Customer </Text>
             </View>
        <FlatList
     style={{marginBottom:60}}
     data={DATA}
     renderItem={({item})=>
         <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#B5BBC0',marginLeft:30,marginRight:30,padding:10,justifyContent:'space-between'}}>
             <Text style={styles.flexText}>{item.Amount}</Text>
             <Text style={styles.flexText}> {item.Time}</Text>
             <Text style={styles.flexText}>{item.Customer}</Text>
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
        DateContainer:{
            flexDirection:'row',
            marginTop:15,
            alignItems:'center',
            justifyContent:'center'
        },
        DateContainerHeading:{
            fontSize:18,
            color:'black',
            marginRight:5,
        },
        DateContainerHeadingContainer:{
            flex:0.7,
            marginLeft:35,
        },
        DateContainerInput:{
            flex:1,
            paddingLeft:2,
            marginRight:30,
            borderWidth:1
        },
        flexText:{
            fontSize:20,
            textAlign:'center'
        },
        flexHeadingContainer:
        {
            flexDirection:'row',
            justifyContent:'space-evenly',
        },
        flexHeading:{
            color:'#0691F8',
            margin:15,
            fontWeight:'bold',
            fontSize:22,
            textAlign:'center'

        }
    }
)


