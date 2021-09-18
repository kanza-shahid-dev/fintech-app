import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg'
import ButtonComp from '../components/ButtonComp'

const ActionSucess = () => {
    return (
        <View style={styles.container}>
          <Image source={require('../assets/images/thumb.jpg')} style={{height:230,width:230,marginTop:15,marginBottom:15}} />
            <View><Text style={{fontSize:32,fontWeight:'900'}}>Action Sucessful!</Text></View>
        <Text style={{fontSize:15,color:'grey',marginTop:20,fontWeight:'900'}}>
            PDF is saved in memory</Text>
        
        <View style={{flex:1,width:'100%' ,justifyContent:'flex-end'}}>    
          <ButtonComp title="CONTINUE" onPress="Home"></ButtonComp>
        </View>
   </View>
)
}

const styles=StyleSheet.create({
container:{
   flex:1,
   padding:45,
   backgroundColor:'#ffffff',
   alignItems:'center',
   justifyContent:'center'
}
})

export default ActionSucess
