import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppLoading } from "expo";

import {
  useFonts,
  MuktaVaani_400Regular,
} from "@expo-google-fonts/mukta-vaani";

function PrivacyButton({ description }) {
  let [fontsLoaded] = useFonts({
    MuktaVaani_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity>
        <Text style={styles.textStyle}>{description}</Text>
      </TouchableOpacity>
    );
  }
}
export default PrivacyButton;
const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "MuktaVaani_400Regular",
  },
});
