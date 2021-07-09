import React from "react";
import { Text, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";

function OnboardingTitle({ description }) {
  let [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={styles.textStyle}>{description}</Text>;
  }
}

export default OnboardingTitle;

const styles = StyleSheet.create({
  textStyle: {
    color: "#000000",
    fontSize: 27,
    fontFamily: "ReemKufi_400Regular",
  },
});
