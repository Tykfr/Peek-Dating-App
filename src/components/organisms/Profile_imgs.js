import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Large_image,Medium_image,Small_image} from '_molecules';

const profile_img = StyleSheet.create({
    basic:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
    },
    medium: {
        justifyContent: "space-between",
    },

})

const Profile_images = ({}) => (
    <View style={profile_img.basic}>
            <Large_image/>
            <View style={profile_img.medium}>
                <Medium_image/>
                <Medium_image/>
            </View>
                <Small_image/>
                <Small_image/>
                <Small_image/>

    </View>
)

export default Profile_images;