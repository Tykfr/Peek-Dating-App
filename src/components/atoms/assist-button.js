import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

function AssistButton({ description }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
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
export default AssistButton;

const styles = StyleSheet.create({
  textStyle: {
    color: "#D99202",
    fontFamily: "Roboto_400Regular",
    fontSize: 21,
  },
});
