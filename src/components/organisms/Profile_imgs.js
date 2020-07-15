import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Large_image,Medium_image,Small_image} from '_molecules';

const profile_img = StyleSheet.create({
    img:{
        
    }
})

const Profile_images = ({}) => (
    <View>
        <Large_image/>
        <Medium_image/>
        <Medium_image/>
        <Small_image/>
        <Small_image/>
        <Small_image/>

    </View>
)

export default Profile_images;