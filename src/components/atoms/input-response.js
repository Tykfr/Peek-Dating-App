import React from "react";
import PropTypes from "prop-types";

import { TextInput, StyleSheet } from "react-native";

function InputResponse({ textFiller, _onChangeText, _onChangeCallBack }) {
  return (
    <TextInput
      style={styles.textInput}
      returnKeyType="done"
      placeholder={textFiller}
      onChangeText={(_onChangeText) => _onChangeCallBack(_onChangeText)}
    />
  );
}

InputResponse.propTypes = {
  textFiller: PropTypes.string,
  _onChangeText: PropTypes.string,
  _onChangeCallBack: PropTypes.func,
};
export default InputResponse;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    width: 300,
    textAlign: "center",
    fontSize: 24,
  },
});
