import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";

const small_img = StyleSheet.create({
    container: {

    },
    img: {
        borderRadius: 15,
        width: 104,
        height:69,
        backgroundColor: 'black',
    }
})

const Small_image = ({}) => (
    <View>
        <View style={small_img.img}> 
        <Remove_button/>
      
        </View>
    </View>
)

export default Small_image;