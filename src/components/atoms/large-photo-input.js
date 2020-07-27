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

function LargePhotoInput({ _image, _setImage }) {
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
        // Image is null the first time...are we not waiting long enough?
        await setImage(result.uri); //this function locally belongs to this function component
        await _setImage(image); //this function returns the result back to the parent component
        console.log(image);
      }
    } catch (E) {
      console.log(E);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.largePhotoStyle}>
        <ImageBackground
          source={{ uri: image !== null ? image : temp }}
          style={{
            width: 201,
            height: 196,
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

export default LargePhotoInput;
LargePhotoInput.propTypes = {
  _image: PropTypes.string,
  _setImage: PropTypes.func,
};
const styles = StyleSheet.create({
  largePhotoStyle: {
    width: 201,
    height: 196,
    borderWidth: 1,
    borderRadius: 23,
    flexShrink: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 201,
    height: 196,
    borderRadius: 23,
  },
});
