import React from "react";
import PropTypes from "prop-types";

import { TextInput, StyleSheet } from "react-native";

function InputResponse({
  _placeHolder,
  _onChangeText,
  _onChangeCallBack,
  _keyboardType,
  _editable,
}) {
  return (
    <TextInput
      style={styles.textInput}
      returnKeyType="done"
      editable={_editable}
      keyboardType={_keyboardType}
      placeholder={_placeHolder}
      onChangeText={(_onChangeText) => _onChangeCallBack(_onChangeText)}
    />
  );
}

InputResponse.propTypes = {
  _editable: PropTypes.bool.isRequired,
  _onChangeText: PropTypes.string.isRequired,
  _onChangeCallBack: PropTypes.func.isRequired,
  _keyboardType: PropTypes.string.isRequired,
  _placeHolder: PropTypes.string,
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
