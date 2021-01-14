import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";
import {Image} from 'react-native-elements';


const small_img = StyleSheet.create({
    container: {

    },
    img: {
        borderRadius: 15,
        height:69,
        backgroundColor: 'black',
    }
})

const Small_image = ({}) => (
        <Image style={small_img.img}> 
        <Remove_button/>
  
        </Image>
)

export default Small_image;