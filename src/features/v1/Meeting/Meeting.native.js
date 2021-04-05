import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet, FlatList, Dimensions, ActivityIndicator, Image, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ColorPalette } from '../../../theme/style/constant';
import Feather from 'react-native-vector-icons/Feather'
import Header from '../../../components/mobile/Header.native';
import { Avatar } from 'react-native-paper';
export default function Meeting(props) {

    const meetingData = [
        { id: 1, label: "T", name: "Conference", time: " Wed , March 31 3:17 PM 01:20" },
        { id: 2, label: "M", name: "Project Meeting", time: " Mon , March 29 2:01 PM 00:11" },
        { id: 3, label: "O", name: "Testing", time: " Sun , March 28 6:15 PM 00:1" },
        { id: 4, label: "P", name: "Abc", time: " Sun , March 26 12:15 PM 00:23" },
        { id: 5, label: "U", name: "Check", time: " Sun , March 26 2:25 PM 00:08" },
    ]
    const renderItem = (item) => {
        return (
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', borderBottomColor: "#d2d2d2", borderBottomWidth: 1, paddingVertical: 10, marginVertical: 10 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Avatar.Text color={ColorPalette.black} style={{ backgroundColor: ColorPalette.avatorColor[Math.floor(Math.random() * ColorPalette.avatorColor.length)] }} size={56} label={item.item.label} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: ColorPalette.black, fontSize: 16, fontWeight: 'bold' }}>
                        {item.item.name}
                    </Text>
                    <Text style={{ color: ColorPalette.black }}>
                        {item.item.time}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.parentView}>
            <Header name="Meeting" props={props} />
            {/* <ScrollView style={{ width: '100%', backgroundColor: ColorPalette.white, height: '100%', paddingVertical: 5 }}> */}
                <View  >
                    <Text style={{ paddingHorizontal: 30, paddingVertical: 10, fontSize: 18, color: ColorPalette.gray }}>
                        Enter Meeting Name
                </Text>
                    <View style={{ width: "90%", marginHorizontal: "5%", borderRadius: 90, height: 45, borderWidth: 1, borderColor: ColorPalette.SecondaryColor }}>
                        <TextInput
                            placeholder='Meet Name'
                            style={{ color: ColorPalette.gray, fontSize: 16, paddingHorizontal: 20 }}
                        />
                    </View>
                    <TouchableOpacity style={{ width: '50%', borderRadius: 90, height: 40, backgroundColor: ColorPalette.primaryColor, marginVertical: 20, marginHorizontal: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: ColorPalette.white }}>CREATE / JOIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', justifyContent: 'center', backgroundColor: ColorPalette.primaryColor, height: 35 }}>
                    <Text style={{ color: ColorPalette.white, fontSize: 16, paddingHorizontal: 20 }}> Recent Meeting</Text>
                </View>

                <FlatList
                    data={meetingData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2'
    },

})