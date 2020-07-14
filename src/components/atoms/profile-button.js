import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const circle = StyleSheet.create({
    basic: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: 'white',
        borderWidth:1,
        position: "absolute",
        left: 31,
        top: 18,
        borderColor: "#FCD449",
    },
    press: {
        position: "relative",
        width: 50,
        height: 50,
    }
});
const Profile_button = ({navigation}) => 
                                <View style={circle.basic}>

                                <TouchableOpacity 
                                onPress={() => navigation.navigate('Profile')}
                                >
                                    <View style={circle.press}></View>
                                </TouchableOpacity>
                                </View>;

export default Profile_button;