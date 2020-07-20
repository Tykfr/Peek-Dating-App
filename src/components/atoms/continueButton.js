import React from "react";
import PropTypes from "prop-types";

import { Text, TouchableOpacity, StyleSheet } from "react-native";

function ContinueButton({ _onPress, _disabled }) {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={_onPress}
      disabled={_disabled}
    >
      <Text style={styles.testStyle}>Continue</Text>
    </TouchableOpacity>
  );
}
ContinueButton.propTypes = {
  _onPress: PropTypes.func,
  _disabled: PropTypes.string,
};
export default ContinueButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 33,
    borderColor: "#D99202",
    borderWidth: 3,
    height: 50,
    width: 310,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  testStyle: {
    color: "#D99202",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
  },
});
