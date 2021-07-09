import React from "react";
import { Text, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";

function PromptTitle({ description }) {
  let [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={styles.textStyle}>{description}</Text>;
  }
}

export default PromptTitle;

const styles = StyleSheet.create({
  textStyle: {
    color: "#000000",
    fontSize: 22,
    fontFamily: "ReemKufi_400Regular",
    marginLeft: 20,
  },
});
