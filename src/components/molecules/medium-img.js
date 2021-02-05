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
        }
})

const Medium_image = ({img}) => (

        <Image style={medium_img.img}
        source={{uri:img}}
        > 
        <Remove_button
                name={"photo"}
        />
        </Image>
)

export default Medium_image;