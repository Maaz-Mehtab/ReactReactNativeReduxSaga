import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ColorPalette } from '../../../theme/style/constant';

export function DrawerContent(props) {
    const signout =()=>{    
        try{
            AsyncStorage.removeItem("userData")
            props.navigation.replace("Login")
        }
        catch(e){
            console.log("Exception",e)
        }
        }
     return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Text
                                label="J"
                                color={ColorPalette.black}
                                backgroundColor={ColorPalette.white}
                                size={80}
                            />
                            <View style={{marginLeft:15, flexDirection:'column',justifyContent:'center'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                     
                    </View>

                      <DrawerItem 
                        style={styles.drawerItem}
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={ColorPalette.primaryColor}
                                size={26}
                                />
                            )}
                            labelStyle={{ fontSize:15,fontWeight:'bold' }}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                         style={styles.drawerItem}
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={ColorPalette.primaryColor}
                                size={26}
                                />
                            )}
                            labelStyle={{ fontSize:15,fontWeight:'bold' }}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                          style={styles.drawerItem}
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={ColorPalette.primaryColor}
                                size={26}
                                />
                            )}
                            labelStyle={{ fontSize:15,fontWeight:'bold' }}
                            label="Contact"
                            onPress={() => {props.navigation.navigate('Group')}}
                        />
                        <DrawerItem 
                          style={styles.drawerItem}
                          
                            icon={({color, size}) => (
                                 <FontAwesome 
                                name="gear"
                                color={ColorPalette.primaryColor}
                                size={26}
                                />
                            )}
                            label="Settings"
                            labelStyle={{ fontSize:15,fontWeight:'bold' }}
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={ColorPalette.primaryColor}
                        size={26}
                        />
                    )}
                    labelStyle={{ fontSize:15,fontWeight:'bold' }}
                    label="Sign Out"
                    onPress={() => {signout()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      height:150,
      justifyContent:'center',
      backgroundColor:ColorPalette.primaryColor
    },
    title: {
      fontSize: 16,
      color:ColorPalette.white,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      color:ColorPalette.white,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    drawerItem:{
        borderBottomWidth:1,
        borderBottomColor:"#d2d2d2",
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
