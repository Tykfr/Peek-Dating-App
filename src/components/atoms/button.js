import React from "react";
import PropTypes from "prop-types";

import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  MuktaVaani_600SemiBold,
} from "@expo-google-fonts/mukta-vaani";

function Button({ description, onPress }) {
  let [fontsLoaded] = useFonts({
    MuktaVaani_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.buttonText}>{description}</Text>
      </TouchableOpacity>
    );
  }
}
//Prop types allows me to create props for my custom components
//onPress allows me to pass in a function that will trigger when the TouchableOpacity for my functional component is pressed
Button.propTypes = {
  onPress: PropTypes.func,
};
export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33,
    borderWidth: 3,
    borderColor: "#FFF6F6",
    width: 324,
    height: 55,
    marginBottom: 26,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "MuktaVaani_600SemiBold",
    alignSelf: "center",
  },
});
