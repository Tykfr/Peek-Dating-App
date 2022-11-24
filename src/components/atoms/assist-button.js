import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import AppLoading from 'expo-app-loading';
import PropTypes from "prop-types"

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

function AssistButton({ _description, _onPress }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity onPress={_onPress}>
        <Text style={styles.textStyle}>{_description}</Text>
      </TouchableOpacity>
    );
  }
}
export default AssistButton;
AssistButton.propTypes = {
  _onPress: PropTypes.func,
  _description: PropTypes.string,
};
const styles = StyleSheet.create({
  textStyle: {
    color: "#D99202",
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
  },
});
