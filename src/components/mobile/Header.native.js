import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet, Dimensions, ActivityIndicator, Image, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ColorPalette } from '../../theme/style/constant';
import Feather from 'react-native-vector-icons/Feather'

export default function Header(data) {

    const props = data.props
    return (
        <SafeAreaView>
            <View style={{ width: '94%', marginHorizontal: '3%', borderRadius: 90, height: 50, backgroundColor: ColorPalette.primaryColor, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', width: '15%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                    <Feather
                        onPress={() => props.navigation.toggleDrawer()}
                        style={{ fontSize: 22, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 20 }}
                        color={ColorPalette.white}
                        name="menu"
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '85%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                    <Feather
                        onPress={() => props.navigation.toggleDrawer()}
                        style={{ fontSize: 22, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 15 }}
                        color={ColorPalette.white}
                        name="phone"
                    />
                    <Feather
                        onPress={() => props.navigation.toggleDrawer()}
                        style={{ fontSize: 22, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 15 }}
                        color={ColorPalette.white}
                        name="video"
                    />


                    <Feather
                        onPress={() => props.navigation.toggleDrawer()}
                        style={{ fontSize: 22, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10 }}
                        color={ColorPalette.white}
                        name="more-vertical"
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}

