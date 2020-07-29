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
import { useEffect } from "react";

function LargePhotoInput({ _image, _getPermissionAsync }) {
  const temp = "_assets/images/defaultPortait.jpg";
  return (
    <SafeAreaView>
      <View style={styles.largePhotoStyle}>
        <ImageBackground
          source={{
            uri: _image !== null ? `data:image/jpg;base64,${_image}` : temp,
          }}
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
            onPress={() => _getPermissionAsync()}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default LargePhotoInput;

LargePhotoInput.propTypes = {
  _image: PropTypes.string,
  _getPermissionAsync: PropTypes.func,
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
