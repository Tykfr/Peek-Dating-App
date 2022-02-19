import React from 'react';
import {Icon} from 'react-native-elements';
import {TouchableOpacity, StyleSheet, View } from "react-native";


function No_Like_Icon({currentPos, nextPos}){

  return(
   
        <View style = {{justifyContent:"center"}}>
        <TouchableOpacity style={styles.button} onPress={()=>{nextPos(currentPos - 1)}}>
        <Icon color = "#DB6868" type="material-community" name= "thumb-down" size = {30} />
        </TouchableOpacity>
        </View>
     

  )


}

export default No_Like_Icon;

const styles = StyleSheet.create({
    button:{
        backgroundColor:"white",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems:"center",
        justifyContent:"center"
        
        
    }
})