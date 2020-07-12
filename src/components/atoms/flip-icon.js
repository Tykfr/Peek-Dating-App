import React from 'react';
import { StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
const flip = StyleSheet.create({
    container:{
        position: "absolute",
        left: 150,
        top: 754,
    }
});
const Flip_icon = ({}) => (
    <Icon 
    name="autorenew"
    type="material"
    color="#D99202"
    size={30}
    />
)
export default Flip_icon;