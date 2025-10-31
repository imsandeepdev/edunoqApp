import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../Screens/Login"; 
import SIGNUP from "../Screens/Signup";
import OtpScreen from "../Screens/OtpScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoginScreen'}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
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
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
