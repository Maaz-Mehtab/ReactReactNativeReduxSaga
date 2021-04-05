import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet, Dimensions, ActivityIndicator, Image, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch ,useSelector} from 'react-redux'

// import AsyncStorage from '@react-native-async-storage/async-storage';
import {emailRegex} from '../../../../config/app.constant'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginUserAction} from '../store/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ColorPalette } from '../../theme/style/constant';
import { ColorPalette } from '../../../../theme/style/constant';
const CommonStyle = {
    Green: ColorPalette.SecondaryColor,
    Apptheme: "#f2f2f2",
    darkBg: "#000",
    darkText: "#777",
    white: "#FFFFFF",
    darkGreen: ColorPalette.primaryColor,
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height



}
export default function Login(props) {
    const dispatch = useDispatch()
    const userSession = useSelector(state => state.Auth.users)
    const reduxLoader = useSelector(state => state.Auth.isLoader)
    const [state,setstate]= useState({
        secureTextEntry: true,
        password: '',
        username: '',
    })
    const [loginFail,setloginFail] =useState(false)
    const [loginFailMessage,setloginFailMessage] =useState('')
    const [errorEmail,seterrorEmail] =useState(false)
    const [isloader,setisloader] =useState(false)
    const [errorPassword,seterrorPassword] =useState(false)
    const [errorPasswordMessage,seterrorPasswordMessage] =useState('')
    const [errorEmailMessage,seterrorEmailMessage] =useState('')

    const onChangeText = (event,value) => {
        setstate({
            ...state,
            [event]: value,
        });
      
    }

   
   const LoginUser = () => {
        try {
            if (state.username.length == 0) {
                seterrorEmail(true);
                seterrorEmailMessage("Enter your Email")
                return
            }
            if(emailRegex.test(state.username) == false){
                seterrorEmail(true);
                seterrorEmailMessage("Enter your valid Email")
                  return
            }
            else if (state.password.length == 0) {
                seterrorPassword(true);
                seterrorPasswordMessage("Enter your Password")
                return
            }
            setisloader(true)
            let obj = {
                email: state.username.toLowerCase(),
                password: state.password
            }
            dispatch(LoginUserAction(obj))
            if(!reduxLoader){
                setisloader(false)
            }
            if(Object.keys(userSession).length){
                console.log("Done Login")
                AsyncStorage.setItem("userData", JSON.stringify(userSession));
                props.navigation.navigate("Home")
            }
            else{
                seterrorPassword(true)
                seterrorPasswordMessage("Invald Email/Password")
                setTimeout(() => {
                    seterrorPassword(false)
                    seterrorPasswordMessage("")

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
                <StatusBar
                    backgroundColor={'#fff'}
                    barStyle={'dark-content'}
                    translucent={false} />
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

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>

                            <Text style={{ color: "#777", fontSize: 28 }}>
                                Your
                                    <Text style={{ color: CommonStyle.Green, fontSize: 34, fontWeight: 'bold' }}>Logo</Text>
                                <Text>here</Text>
                            </Text>
                        </View>
                        <View style={{ width: '80%', marginHorizontal: '10%', marginTop: 20 }}>
                            <View style={{ alignItems: 'center' }}>

                                <Text style={{ color: CommonStyle.darkText, fontSize: 16 }}>use your Email Address  and</Text>
                                <Text style={{ paddingTop: 2, color: CommonStyle.darkText, fontSize: 16 }}>password to sign in</Text>
                            </View>
                            <View style={{ marginTop: 30 }}>


                                <View style={styles.inputView}>

                                    <TextInput
                                        placeholder="Email address"
                                        name="username"
                                        onChangeText={val => {
                                            onChangeText('username', val.trim())
                                            seterrorEmail(false)
                                            
                                        }}

                                        keyboardType={'email-address'}
                                        value={state.username}
                                        placeholderTextColor={CommonStyle.darkText}
                                        style={{ width: '90%' }}
                                    //   style={styles.inputField}
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
                                        secureTextEntry={state.secureTextEntry}
                                        placeholder="Password"
                                        name="password"
                                        value={state.password}
                                        onChangeText={val => {
                                            onChangeText('password', val.trim())
                                             seterrorPassword(false)
                                           
                                        }}
                                        style={{ width: '90%' }}
                                        placeholderTextColor={CommonStyle.darkText}
                                    // style={styles.inputField}
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
                                    // onPress={() => this.props.navigation.navigate("ForgotPassword")}
                                    style={{ alignItems: 'center', marginTop: 20, }}>
                                    <Text style={[styles.labels, { fontSize: 14, color: ColorPalette.darkText, borderBottomColor: "#d2d2d2", borderBottomWidth: 1, width: 'auto' }]}>
                                        Forgot Password?
                            </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => LoginUser()}
                                    style={{ backgroundColor: CommonStyle.darkGreen, height: 55, justifyContent: 'center', marginTop: 40, borderRadius: 5, width: '100%', alignItems: 'center' }}>
                                    <Text style={[styles.labels, { paddingTop: 0, color: CommonStyle.white, fontSize: 20, fontWeight: 'bold' }]}>
                                        SIGN IN
                            </Text>
                                </TouchableOpacity>


                                <View
                                    style={{ height: 30, justifyContent: 'center', marginTop: 40, width: '100%', alignItems: 'center', }}>
                                    <Text style={[styles.labels, { fontSize: 12, paddingTop: 0, color: CommonStyle.lightGray, fontWeight: 'bold' }]}>
                                        Don't have an account?
                                     </Text>
                                </View>

                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate("Signup")}
                                    style={{ backgroundColor: '#FFB529', height: 55, justifyContent: 'center', marginTop: 5, borderRadius: 5, width: '100%', alignItems: 'center' }}>
                                    <Text style={[styles.labels, { paddingTop: 0, color: '#333', fontSize: 20, fontWeight: 'bold' }]}>
                                        REGISTER
                            </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
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
        fontSize: 18,
        paddingTop: 0,
        color: '#777'
    },
    PasswordSecureView: {
        position: 'absolute',
        top: 102,
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