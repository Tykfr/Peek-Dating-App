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

import PropTypes from "prop-types";

function MediumPhotoInput({ _image, _getPermissionAsync }) {
  const temp = "_assets/images/defaultPortait.jpg";

  return (
    <SafeAreaView>
      <View style={styles.mediumPhotoStyle}>
        <ImageBackground
          resizeMode="repeat"
          source={{
            uri: _image !== null ? `data:image/jpg;base64,${_image}` : temp,
          }}
          style={{
            width: 134,
            height: 92,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          imageStyle={{
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

export default MediumPhotoInput;
MediumPhotoInput.propTypes = {
  _image: PropTypes.string,
  _getPermissionAsync: PropTypes.func,
};
const styles = StyleSheet.create({
  mediumPhotoStyle: {
    width: 134,
    height: 92,
    borderWidth: 1,
    borderRadius: 23,
    flexShrink: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
