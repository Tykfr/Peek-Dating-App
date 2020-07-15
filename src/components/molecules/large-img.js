import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";

const large_img = StyleSheet.create({
    container: {

    },
    img: {
        borderRadius: 23,
        width: 192,
        height:183,
        backgroundColor: 'black',
    }
})

const Large_image = ({}) => (
    <View>
        <View style={large_img.img}> 
        <Remove_button/>
      
        </View>
    </View>
)

export default Large_image;