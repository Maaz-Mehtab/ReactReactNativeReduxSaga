import React, { useState, useEffect, createContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Contact from '../Contact/Contact.native';
import Profile from '../Profile/Profile.native';
import Setting from '../Setting/Setting.native';
import Meeting from '../Meeting/Meeting.native';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#128C7E',
        inactiveTintColor: 'gray',
      }}
      activeTintColor="#075E54"
      inactiveTintColor="gray"

    >

      <Tab.Screen
          options={{
          tabBarLabel: 'Meeting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Meeting" component={Meeting} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
        name="Profile" component={Profile} />


      <Tab.Screen
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="group" color={color} size={22} />
          ),
        }}
        name="Group" component={Contact} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" color={color} size={22} />
          ),
        }}
        name="Setting" component={Setting} />
    </Tab.Navigator>


  );
}
