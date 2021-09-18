import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import Verification from '../screens/Verification';
import AddCard from '../screens/AddCard';
import ResetPin from '../screens/ResetPin';
import SendCode from '../screens/SendCode';
import Menu from '../screens/Menu';
import Home from '../screens/Home';
import ManageCustomer from '../screens/ManageCustomer';
import Profile from '../screens/Profile';
import Collection from '../screens/Collection';
import Subscription from '../screens/Subscription';
import AccountCreated from '../screens/AccountCreated';
import ManageFunds from '../screens/ManageFunds';
import Sucessful from '../screens/Sucessful';
import Report from '../screens/Report';
import DepositbyCustomer from '../screens/DepositbyCustomer';
import ActionSucess from '../screens/ActionSucess';
import SubscriptionDetail from '../screens/SubscriptionDetail';
import CloseSubscription from '../screens/CloseSubscription';
import DepositbyCollector from '../screens/DepositbyCollector';
import ManageSubscriptionSheet from '../screens/ManageSubscriptionSheet';

export default function StackNavigation() {
    const navigation=createStackNavigator();
    return (
        <navigation.Navigator screenOptions={{headerShown:false}} initialRouteName="Login" >
           <navigation.Screen name="Home" component={Home} ></navigation.Screen>
           <navigation.Screen name="Collection" component={Collection} ></navigation.Screen>
           <navigation.Screen name="Profile" component={Profile} ></navigation.Screen>
           <navigation.Screen name="ManageCustomer" component={ManageCustomer} ></navigation.Screen>
           <navigation.Screen name="ManageFunds" component={ManageFunds} ></navigation.Screen>
           <navigation.Screen name="Login" component={Login} ></navigation.Screen>
           <navigation.Screen name="Register" component={Register}></navigation.Screen>
           <navigation.Screen name="Verification" component={Verification} ></navigation.Screen>
           <navigation.Screen name="Report" component={Report}></navigation.Screen>
           <navigation.Screen name="AddCard" component={AddCard} ></navigation.Screen>
           <navigation.Screen name="AccountCreated" component={AccountCreated} ></navigation.Screen>
           <navigation.Screen name="ResetPin" component={ResetPin} ></navigation.Screen>
           <navigation.Screen name="Sucessful" component={Sucessful} ></navigation.Screen>
           <navigation.Screen name="SendCode" component={SendCode} ></navigation.Screen>
           <navigation.Screen name="DepositByCusotmer" component={DepositbyCustomer}></navigation.Screen>
           <navigation.Screen name="DepositByCollector" component={DepositbyCollector}></navigation.Screen>
           <navigation.Screen name="ActionSucess" component={ActionSucess}></navigation.Screen>
           <navigation.Screen name="Subscription" component={Subscription} ></navigation.Screen>
           <navigation.Screen name="SubscriptionDetail" component={SubscriptionDetail} ></navigation.Screen>
           <navigation.Screen name="ManageSubscriptionSheet" component={ManageSubscriptionSheet} ></navigation.Screen>
           <navigation.Screen name="CloseSubscription" component={CloseSubscription} ></navigation.Screen>
              </navigation.Navigator>
    )
}
