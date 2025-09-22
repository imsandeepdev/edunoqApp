import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../Screens/Login"; 
import SIGNUP from "../Screens/Signup";
import OtpScreen from "../Screens/OtpScreen";
import ProfileScreen from "../Screens/ProfileScreen";




const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={'SIGNUP'}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SIGNUP"
          component={SIGNUP}
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="OtpScreen" 
        component={OtpScreen} 
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
