import React from "react";
import { Text, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";

function SettingsButtonTitle({ description }) {
  let [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={styles.textStyle}>{description}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "ReemKufi_400Regular",
    // marginLeft: 20,
  },
});

export default SettingsButtonTitle;
