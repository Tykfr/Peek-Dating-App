import React from 'react';
import {StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';
import { TouchableOpacity, View} from "react-native";
import {Queue} from "_dataStructures";

function Like_Icon({ queue, likesFunc, setNextProfile, userProfileTable, setNextUserID}){

  return(
   
        <View style ={{justifyContent:"center"}}>
        <TouchableOpacity style={styles.button} onPress={() =>{
           queue.dequeue();
           setNextUserID(queue.peek());
           setNextProfile(userProfileTable[queue.peek()]);
           likesFunc();
          
        }}>
        <Icon color = "#4682DD" type="material-community" name= "thumb-up" size = {30}  />
        </TouchableOpacity>
        </View>
     

  )


}

export default Like_Icon;

const styles = StyleSheet.create({
    button:{
        backgroundColor:"white",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems:"center",
        justifyContent:"center"  
    },
   
})