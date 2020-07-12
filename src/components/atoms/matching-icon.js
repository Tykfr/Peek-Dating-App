import React from 'react';
import {StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';

const match = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 654,
        left: 333,
    }
});

const match_icon = ({}) => (
    <Icon 
        name="style"
        type="material"
        color="#FFFFFF"
        size={50}
        containerStyle={match.container}
    />
)

export default match_icon;
                