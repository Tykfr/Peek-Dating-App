import React from "react";
import { Text, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Vollkorn_400Regular } from "@expo-google-fonts/vollkorn";

function AppTitle() {
  let [fontsLoaded] = useFonts({
    Vollkorn_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={styles.title}> Peek </Text>;
  }
}

export default AppTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Vollkorn_400Regular",
    fontSize: 60,
    color: "#FFFFFF",
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 10,
    // marginBottom: 17,
    // marginRight: 20,
  },
});
