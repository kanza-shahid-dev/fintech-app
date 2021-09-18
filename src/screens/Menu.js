import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Menu({navigation}) {
    return (
        <View >
            <Button title="Splash Screen" onPress={()=>navigation.navigate("Splash")}  />
            <Button title="Login" onPress={()=>navigation.navigate("Login")} />
            <Button title="Register" onPress={()=>navigation.navigate("Register")} />
            <Button title="Add Card" onPress={()=>navigation.navigate("AddCard")} />
            <Button title="Forgot Pin" onPress={()=>navigation.navigate("SendCode")} />
            <Button title="Verification" onPress={()=>navigation.navigate("Verification")} />
            <Button title="Reset Pin" onPress={()=>navigation.navigate("ResetPin")} />
            <Button title="Account Created" onPress={()=>navigation.navigate("AccountCreated")} />
            <Button title="Home" onPress={()=>navigation.navigate("Home")} />
            <Button title="Manage Customer" onPress={()=>navigation.navigate("ManageCustomer")} />
            <Button title="Manage Funds" onPress={()=>navigation.navigate("ManageFunds")} />
            <Button title="Subscription" onPress={()=>navigation.navigate("Subscription")} />
            <Button title="Profile" onPress={()=>navigation.navigate("Profile")} />
            <Button title="Collection" onPress={()=>navigation.navigate("Collection")} />
        </View>
    )
}
