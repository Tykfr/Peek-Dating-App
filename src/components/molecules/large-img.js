import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";
import {Image} from 'react-native-elements';

const large_img = StyleSheet.create({
    container: {

    },
    img: {
        borderRadius: 23,
        height:"100%",
        backgroundColor: 'black',
    }
})

const Large_image = ({}) => (
    // Add if case here and remove or add button
        <Image style={large_img.img}> 
        <Remove_button/>
      
        </Image>
)

export default Large_image;