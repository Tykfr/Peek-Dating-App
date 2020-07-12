import React from 'react';
import { View,StyleSheet } from 'react-native';
const circle = StyleSheet.create({
    basic: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: 'black',
        left: 31,
        top: 18,
        position: "absolute",
        borderWidth:1,
        borderColor: "#FCD449",
    }
});
const Profile_button = ({}) => <View style={circle.basic}/>;

export default Profile_button;