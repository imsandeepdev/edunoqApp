import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBarButtonProps, BottomTabNavigationOptions,
 createBottomTabNavigator
 } from "@react-navigation/bottom-tabs";
import LoginScreen from "../Screens/Login"; 
import SIGNUP from "../Screens/Signup";
import R from "../Res/R";
import { Image, Platform, Pressable, StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Modules from "../Screens/Modules";
import Leaderboard from "../Screens/Leaderboard";
import Profile from "../Screens/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabConfig: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: R.colors.appColor,
  tabBarInactiveTintColor: R.colors.white,
  tabBarStyle: {
    backgroundColor: R.colors.appColor,
    borderTopWidth: 0,
    ...Platform.select({
      android: {
        height: 70,
        paddingBottom: 16,
        // height: 110,
        // paddingBottom: 56,
      },
      ios: {
        height: 90,
        paddingBottom: 36,
      },
    }),
  },
};

const CustomTabButton = (props: BottomTabBarButtonProps) => {
  const { accessibilityState, children, onPress, onLongPress, style, ...rest } = props;
  const focused = props["aria-selected"] ?? false;

  console.log('Tab Button Props:==>', props);

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityState={accessibilityState}
      style={({ pressed }) => [
        style,
        styles.tabButton,
        focused && styles.tabButtonFocused,
        pressed && styles.tabButtonPressed,
      ]}
    >
      {children}
    </Pressable>
  );
};


const RenderTabNavigation = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Dashboard" 
    screenOptions={TabConfig}>
      <Tab.Screen
        name={'Dashboard'}
        
        options={{
          tabBarLabel: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={R.image.homeTab} style={{ tintColor: color, width: size, height: size }} />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />
        }}
        component={Home}
      />

      <Tab.Screen
        name={'Modules'}
        options={{
          tabBarLabel: 'Modules',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={R.image.moreTab} style={{ tintColor: color, width: size, height: size }} />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />
        }}
        component={Modules}
      />

      <Tab.Screen
        name={'Leaderboard'}
        options={{
          tabBarLabel: 'Leaderboard',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={R.image.storeTab} style={{ tintColor: color, width: size, height: size }} />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />
        }}
        component={Leaderboard}
      />
      <Tab.Screen
        name={'Profile'}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={R.image.settingTab} style={{ tintColor: color, width: size, height: size }} />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name={'Dashboard'} component={RenderTabNavigation} />
        
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

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonFocused: {
    margin: 5,
    padding: 5,
    height: 60,
    width: 90,
    backgroundColor: R.colors.white,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  tabButtonPressed: {
    opacity: 0.8, // subtle press effect
    transform: [{ scale: 0.97 }], // slight shrink animation
  },
});




