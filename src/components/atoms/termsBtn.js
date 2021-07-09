import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  MuktaVaani_400Regular,
} from "@expo-google-fonts/mukta-vaani";

function TermsButton({ description }) {
  let [fontsLoaded] = useFonts({
    MuktaVaani_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity>
        <Text style={styles.text}> {description}</Text>
      </TouchableOpacity>
    );
  }
}

export default TermsButton;

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "MuktaVaani_400Regular",
  },
});
