import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../Screens/Login"; 
import SIGNUP from "../Screens/Signup";

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
          name="Signup"
          component={SIGNUP}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
