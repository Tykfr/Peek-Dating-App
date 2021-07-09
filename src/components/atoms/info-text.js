import React from "react";

import { Text, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

function InfoText({ description, extraInfo }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text style={styles.textStyle}>
        {description} {extraInfo}
      </Text>
    );
  }
}

export default InfoText;
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    color: "#656565",
  },
});
