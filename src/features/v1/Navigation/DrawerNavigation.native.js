import React, { useState, useEffect, createContext } from 'react'
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from "@react-navigation/drawer";
import createBottomTabNavigator from './BottomNavigator.native';
import Setting from '../Setting/Setting.native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity, Text,   } from 'react-native';
import { DrawerContent } from './DrawerContent.native';





const Drawer = createDrawerNavigator();
export default function  DrawerNavigator ()  {
  return (
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={createBottomTabNavigator} />
     
    </Drawer.Navigator>
  );
}
