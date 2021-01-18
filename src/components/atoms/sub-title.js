import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { AppLoading } from "expo";
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";

function SubTitle({ description }) {
  let [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={styles.text}>{description}</Text>;
  }
}

SubTitle.propTypes = {
  description: PropTypes.string,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "ReemKufi_400Regular",
    color: "#7D7C7C",
    fontSize: 18,
  },
});

export default SubTitle;
