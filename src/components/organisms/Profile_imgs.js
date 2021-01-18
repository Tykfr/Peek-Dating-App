import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Large_image,Medium_image,Small_image} from '_molecules';

const profile_img = StyleSheet.create({
    basic:{
        
    },

})

const Profile_images = ({imagesUrl}) => (
    <View style={profile_img.basic}>

        <View style={{flexDirection:'row',flex:1, justifyContent:"space-between"}}>

            <View style={{flex:2}}>
                <Large_image
                    img={imagesUrl[0]}
                />
            </View>

            <View style={{flexDirection:'column',flex:1,justifyContent:"space-between"}}>
                <View style={{flex:1}}>
                    <Medium_image
                        img={imagesUrl[1]}

                    />
                </View>
                <View style={{flex:1}}>
                    <Medium_image
                    img={imagesUrl[2]}
                    />
                </View>
            </View>
        </View>             
        <View style={{flex:1,flexDirection:'row',justifyContent:"space-between"}}>
            <View style={{flex:1}}>
            <Small_image
            img={imagesUrl[3]}
            />
            </View>
            <View style={{flex:1}}>
            <Small_image
            img={imagesUrl[4]}
            />
            </View>
            <View style={{flex:1}}>
            <Small_image
            img={imagesUrl[5]}
            />
            </View>
        </View>   
     
        
    </View>
)

export default Profile_images;