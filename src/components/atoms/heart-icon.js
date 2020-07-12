import React from 'react';
import { StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
const heart = StyleSheet.create({
    container:{
        position: "absolute",
        left: 333,
        top: 18,
    }
});
const Heart_icon = ({}) => (
    <Icon 
    name="favorite"
    type="material"
    color="#D99202"
    size={50}
    containerStyle={heart.container}
    />
)
export default Heart_icon;