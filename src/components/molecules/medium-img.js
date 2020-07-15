import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";

const medium_img = StyleSheet.create({
    container: {

    },
    img: {
        borderRadius: 18,
        width: 128,
        height:85,
        backgroundColor: 'black',
    }
})

const Medium_image = ({}) => (
    <View>
        <View style={medium_img.img}> 
        <Remove_button/>
      
        </View>
    </View>
)

export default Medium_image;