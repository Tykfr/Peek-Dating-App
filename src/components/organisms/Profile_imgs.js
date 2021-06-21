import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Image_box} from '_molecules';

const profile_img = StyleSheet.create({
    basic:{
        
    },

})

const Profile_images = ({imagesUrl}) => (
    <View style={profile_img.basic}>
        
        <View style={{flexDirection:'row',flex:1, justifyContent:"space-between"}}>

            <View style={{flex:2}}>
                <Image_box
                    img={imagesUrl[0]}
                    index={0}
                />
            </View>

            <View style={{flexDirection:'column',flex:1,justifyContent:"space-between"}}>
                <View style={{flex:1}}>
                    <Image_box
                        img={imagesUrl[1]}
                        index={1}

                    />
                </View>
                <View style={{flex:1}}>
                    <Image_box
                    img={imagesUrl[2]}
                    index={2}

                    />
                </View>
            </View>
        </View>             
        <View style={{flex:1,flexDirection:'row',justifyContent:"space-between"}}>
            <View style={{flex:1}}>
            <Image_box
            img={imagesUrl[3]}
            index={3}

            />
            </View>
            <View style={{flex:1}}>
            <Image_box
            img={imagesUrl[4]}
            index={4}

            />
            </View>
            <View style={{flex:1}}>
            <Image_box
            img={imagesUrl[5]}
            index={5}

            />
            </View>
        </View>   
     
        
    </View>
)

export default Profile_images;