import React from 'react';
import { View,StyleSheet } from 'react-native';
import {Remove_button} from "_atoms";
import {Image} from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        backgroundColor:"black",
        borderRadius:15,
    },
    large_img: {
        borderRadius: 15,
        height:"100%",
    },
    medium_img: {
        borderRadius: 15,
        width: "100%",
        height:85,
    },
    small_img: {
        borderRadius: 15,
        height:69,
    }
})

const Image_box = ({img,index}) => (
    <View style={styles.container}>
        {/* Large Image  */}
        {index == 0 &&    
        <Image 
            style={styles.large_img}
            source={{uri:img}}
        >   
        <Remove_button id={index}/>
        </Image>
        }
        {/* Medium image */}
        {index > 0 &&  index < 3 &&  
        <Image 
            style={styles.medium_img}
            source={{uri:img}}
        >   
            <Remove_button id={index}/>

        </Image>
        }
        {/* Small image */}
        {index > 2 &&  
        <Image 
            style={styles.small_img}
            source={{uri:img}}
        >   
            <Remove_button id={index}/>

        </Image>
        }
    </View>

     
)

export default Image_box;