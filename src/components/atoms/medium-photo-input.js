import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import PropTypes from "prop-types";

function MediumPhotoInput({ _image, _setImage }) {
  const [image, setImage] = React.useState(null);
  const temp = "_assets/images/defaultPortait.jpg";
  async function getPermissionAsync() {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        _pickImage();
      }
    }
  }
  async function _pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri); //this function locally belongs to this function component
        _setImage(result.uri); //this function returns the result back to the parent component
      }
    } catch (E) {
      console.log(E);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.mediumPhotoStyle}>
        <ImageBackground
          source={{ uri: image !== null ? image : temp }}
          style={{
            width: 134,
            height: 92,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          imageStyle={{
            borderWidth: 1,
            borderRadius: 23,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="md-add-circle"
            size={24}
            color="#D99202"
            backgroundColor="white"
            onPress={() => getPermissionAsync()}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default MediumPhotoInput;
MediumPhotoInput.propTypes = {
  _image: PropTypes.string,
  _setImage: PropTypes.func,
};
const styles = StyleSheet.create({
  mediumPhotoStyle: {
    width: 134,
    height: 92,
    borderWidth: 1,
    borderRadius: 23,
    // backgroundColor: "green",
    flexShrink: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 134,
    height: 92,
    borderRadius: 23,
  },
});
