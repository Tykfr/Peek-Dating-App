import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

/*
It takes a second to for the image to be loaded into the screen
*/
function Story_Button (){
    return (
        <TouchableOpacity style={styles.button}>
           <Image style = {styles.image} source = {require('_assets/images/stock_photos/img_1.jpg')}/>
        </TouchableOpacity>
    )
}

export default Story_Button;

const styles = StyleSheet.create({
    button:{
        height: 100,
        width:100,
        borderRadius:100/2,
        borderColor:"#000000",
        borderWidth:2,
        backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        height: 100,
        width:100,
        borderRadius:100/2,
        borderColor:"#000000",
        borderWidth:2,
    }

})