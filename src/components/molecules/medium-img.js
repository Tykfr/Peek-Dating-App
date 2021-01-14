import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";
import {Image} from 'react-native-elements';

const medium_img = StyleSheet.create({
    container: {

    },
    img: {
        borderRadius: 18,
        width: "100%",
        height:85,
        
        backgroundColor: 'black',
    }
})

const Medium_image = ({}) => (
        <Image style={medium_img.img}> 
        <Remove_button/>
      
        </Image>
)

export default Medium_image;