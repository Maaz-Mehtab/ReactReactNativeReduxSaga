import React, { useState, useEffect, createContext } from 'react'
import { View, Text, StatusBar, ActivityIndicator, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Auth/Login/Login.native';
import Signup from '../Auth/Signup/Signup.native';
import Contact from '../Contact/Contact.native';
import Profile from '../Profile/Profile.native';
import Setting from '../Setting/Setting.native';
import Meeting from '../Meeting/Meeting.native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorPalette } from '../../theme/style/constant';
import DrawerNavigator from './DrawerNavigation.native'
const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content', true);
StatusBar.setBackgroundColor('#fff');



function App() {
  const [userstate, setUserstate] = useState({})
  const [loading, setloading] = useState(true)


  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    getUser();

  }, [loading])

  const getUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      setUserstate(data)
      setloading(false)
    } catch (error) {
      console.log("Something went wrong", error);
      setloading(false)
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ActivityIndicator size="large" color="#0000ff" />

      </View>
    )
  }

  else if (userstate == null || userstate == undefined || Object.keys(userstate).length == 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Signup" component={Signup}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Home" component={DrawerNavigator}
            options={{ headerShown: false }}
          />
         </Stack.Navigator>
      </NavigationContainer>
    )
  }


  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={DrawerNavigator}
            options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Signup" component={Signup}
             options={{ headerShown: false }}

          />
  </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
