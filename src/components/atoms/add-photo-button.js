import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {Icon} from 'react-native-elements';
import AsyncStorage from "@react-native-community/async-storage";
import * as firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const getPermissionAsync = async (index) =>{
    if (Platform.OS === "ios" || Platform.OS === "android") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        await _pickImage(index);
      }
    }
  }
const _pickImage = async (index) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
        base64:true
      });
      if (!result.cancelled) {
        let userID = await AsyncStorage.getItem("userID")
        uploadImage(result.uri,userID,index)

      }
    } catch (E) {
      console.log(E);
    }
  }
const uploadImage = async (imgurl, userID,index) =>{
      console.log("Uploading image " + index );
      let ref = firebase.storage().ref().child("user_images/" + "user_" +userID  + "/" + "img_"+ index);
      const response = await fetch(imgurl);
      const blob = await response.blob();
      ref.put(blob)
              .then(function(snapshot) {
             console.log('Uploaded img ' + userID);
            })
            .catch((error) =>{
             console.error("Failure on image : " + x +" " + error);
            });
    }
 

const Add_photo_button = ({index}) => {

    return(
        <View>
        <Icon 
        name="add-circle"
        type="material"
        color="#FFFFFF"
        size={15}
        containerStyle={styles.container}
        onPress={() => getPermissionAsync(index)}
        />
        </View>
    )
}

export default Add_photo_button;

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-end',
    },

})