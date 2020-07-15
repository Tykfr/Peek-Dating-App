import React from 'react';
import {StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';

const remove = StyleSheet.create({
    container: {
        alignItems:'flex-end',
    }
});

const Remove_icon = ({}) => (
    <Icon 
        name="cancel"
        type="material"
        color="#FFFFFF"
        size={15}
        containerStyle={remove.container}
    />
)

export default Remove_icon;