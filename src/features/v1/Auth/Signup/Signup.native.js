import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet, Dimensions, ActivityIndicator, Image, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch ,useSelector} from 'react-redux'

// import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegisterUserAction} from '../store/AuthAction';
import {emailRegex} from '../../../../config/app.constant'
// import { ColorPalette } from '../../theme/style/constant';
import { ColorPalette } from '../../../../theme/style/constant';
const CommonStyle = {
    Green: ColorPalette.SecondaryColor,
    Apptheme: "#f2f2f2",
    darkBg: "#000",
    darkText: "#777",
    white: "#FFFFFF",
    yellow:ColorPalette.yellow,
    darkGreen: ColorPalette.primaryColor,
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height
}

export default function Signup(props){

 const dispatch = useDispatch()
    const userSession = useSelector(state => state.Auth.users)
    const reduxLoader = useSelector(state => state.Auth.isLoader)
    const [state,setstate]= useState({
        secureTextEntry: true,
        password: '',
        username: '',
        email:'',
       
    })
    
    const [isloader,setisloader] =useState(false)
    const [errorEmail,seterrorEmail] =useState(false)
    const [errorUser,seterrorUser] =useState(false)
    const [errorPassword,seterrorPassword] =useState(false)
    const [loginFail,setloginFail] =useState(false)
    const [errorEmailMessage,seterrorEmailMessage] =useState('')
    const [errorUserMessage,seterrorUserMessage] =useState('')
    const [errorPasswordMessage,seterrorPasswordMessage] =useState('')
    const [loginFailMessage,setloginFailMessage] =useState('')
   

    const onChangeText = (event,value) => {
        setstate({
            ...state,
            [event]: value,
        });
      
    }

    const SignUpUser = () => {
        try {
            if (state.email.length == 0) {
                seterrorEmail(true);
                seterrorEmailMessage("Enter your Email")
                  return
            }
            if(emailRegex.test(state.email) == false){
                seterrorEmail(true);
                seterrorEmailMessage("Enter your valid Email")
                  return
            }
            if (state.username.length == 0) {
                seterrorUser(true);
                seterrorUserMessage("Enter your Name")
                return
            }

            else if (state.password.length == 0) {
                seterrorPassword(true);
                seterrorPasswordMessage("Enter your Password")
                return
            }
            setisloader(true)

           
            let obj = {
                email: state.email.toLowerCase(),
                password:state.password,
                name: state.username
            }
            dispatch(RegisterUserAction(obj))
             if(!reduxLoader){
                setTimeout(() => {
                 setisloader(false)
                 props.navigation.navigate("Login")
            }, 5000);
            }
         }
        catch (e) {
            console.log("error", e.message)
            setisloader(false)
        }
    }


    return (

        <View style={styles.parentView}>

            <SafeAreaView>
                {isloader &&
                    <View style={styles.menuLoaderView}>
                        <ActivityIndicator
                            color={CommonStyle.Green}
                            size="large"
                        />
                    </View>
                }
                <ScrollView keyboardShouldPersistTaps="always">
                    <Ionicons
                        onPress={() => props.navigation.goBack()}
                        style={{ position: 'absolute', top: 15, left: 30 }}
                        name={'arrow-back'}
                        color={"#777"}
                        size={34}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>

                        <Text style={{ color: "#777", fontSize: 28 }}>
                            Your
                             <Text style={{ color: CommonStyle.Green, fontSize: 34, fontWeight: 'bold' }}>Logo</Text>
                            <Text>here</Text>
                        </Text>
                    </View>
                    <View style={{ width: '80%', marginHorizontal: '10%', marginTop: 40 }}>
                        <View style={{ alignItems: 'center' }}>

                            <Text style={{ color: CommonStyle.darkText, fontSize: 16 }}>use your Email Address  and</Text>
                            <Text style={{ paddingTop: 2, color: CommonStyle.darkText, fontSize: 16 }}>password to sign in</Text>
                        </View>
                        <View style={{ marginTop: 40 }}>

                            <View style={[styles.inputView, { marginTop: 10 }]}>
                                <TextInput
                                    placeholder="info@gmail.com"
                                    name="email"
                                    onChangeText={val => {
                                        onChangeText('email', val.trim())
                                        seterrorEmail(false)
                                    }}
                                    style={{width:'90%'}}
                                    keyboardType={'email-address'}
                                    value={state.Email}
                                    placeholderTextColor={CommonStyle.darkText}
                                />
                                 <MaterialCommunityIcons
                                    name="email"
                                    color={CommonStyle.Green}
                                    size={20}
                                />
                            </View>
                            {errorEmail &&
                                <View style={styles.errorView}>
                                    <Text style={styles.errorViewText}>
                                        {errorEmailMessage}
                                    </Text>
                                </View>
                            }



                            <View style={[styles.inputView, { marginTop: 30 }]}>
                                <TextInput
                                    placeholder="User Name"
                                    name="username"
                                    onChangeText={val => {
                                        onChangeText('username', val.trim())
                                        seterrorUser(false)
                                    }}
                                    style={{width:'90%'}}
                                    keyboardType={'email-address'}
                                    value={state.username}
                                    placeholderTextColor={CommonStyle.darkText}

                                />
                                 <Ionicons
                                    name="person"
                                    color={CommonStyle.Green}
                                    size={20}
                                />
                            </View>
                            {errorUser &&
                                <View style={styles.errorView}>
                                    <Text style={styles.errorViewText}>
                                        {errorUserMessage}
                                    </Text>
                                </View>
                            }

                            <View style={[styles.inputView, { marginTop: 30 }]}>
                                <TextInput
                                    secureTextEntry={state.secureTextEntry}
                                    placeholder="Password"
                                    value={state.password}
                                    onChangeText={val => {
                                        onChangeText('password', val.trim())
                                        seterrorPassword(false)
                                    }}
                                    style={{width:'90%'}}
                                    placeholderTextColor={CommonStyle.darkText}

                                />
                                 <FontAwesome
                                    name="lock"
                                    color={CommonStyle.Green}
                                    size={20}
                                />

                            </View>
                            {errorPassword &&
                                <View style={styles.errorView}>
                                    <Text style={styles.errorViewText}>
                                        {errorPasswordMessage}
                                    </Text>
                                </View>
                            }
                            {
                                loginFail &&
                                <View style={styles.TextFieldView}>
                                    <View style={styles.LoginView}>
                                        <Text style={styles.errorViewText}>
                                            {
                                                loginFailMessage
                                            }
                                        </Text>
                                    </View>
                                </View>
                            }
                         <TouchableOpacity
                                onPress={() => SignUpUser()}
                                style={{ backgroundColor: CommonStyle.darkGreen, height: 55, justifyContent: 'center', marginTop: 40, borderRadius: 5, width: '100%', alignItems: 'center' }}>
                                <Text style={[styles.labels, { paddingTop: 0, color: CommonStyle.white, fontSize: 20, fontWeight: 'bold' }]}>
                                    REGISTER
                        </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                // onPress={() => this.props.navigation.navigate("ForgotPassword")}
                                style={{ alignItems: 'center', marginTop: 20, }}>
                                <Text style={[styles.labels, { fontSize: 14, color: ColorPalette.darkText,   }]}>
                                    Already have an account?
                        </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("Login")}
                                style={{ alignItems: 'center', marginTop: 20,justifyContent:'center',flexDirection:'row' }}>
                                <Text style={[styles.labels, { fontSize: 14, color: '#FFB529',  paddingRight:10 }]}>
                                  SIGN IN
                        </Text>
                        <Ionicons
                                    name="chevron-forward-circle-outline"
                                    color={CommonStyle.yellow}
                                    size={20}
                                />
                       
                            </TouchableOpacity>


                        </View>
                    </View>
                    {/* </View> */}
                </ScrollView>
            </SafeAreaView>
        </View>

    )
}















const styles = StyleSheet.create({
    parentView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2'
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        width: '100%', borderRadius: 4, backgroundColor: "#f2f2f2",
        borderColor: '#d2d2d2', // if you need 
        // borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#d2d2d2',
        shadowRadius: 2,
        shadowOpacity: 1,
        elevation: 2
    },
    inputField: {
        color: '#7C7C7C',
        paddingHorizontal: 0,
        borderBottomColor: '#7C7C7C',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    labels: {
        fontSize: 16,
        paddingTop: 0,
        color: '#7C7C7C'
    },
    PasswordSecureView: {
        position: 'absolute',
        top: 172,
        right: 0,
        padding: 10
    },
    menuLoaderView: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: '100%',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        zIndex: 10000,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    },
    errorViewText: {
        borderRadius: 10,
        color: '#fa3335',
        textAlign: 'center',
        backgroundColor: '#ffe0e0',
        padding: 2,
        paddingHorizontal: 20,
        fontSize: 14
    },
    errorView: {
        alignSelf: "center",
        paddingVertical: 5,
    }
})
