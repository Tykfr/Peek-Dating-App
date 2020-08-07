import React from "react";
import PropTypes from "prop-types";

import { TextInput, StyleSheet } from "react-native";

function InputResponse({
  _autoCapitalize,
  _placeHolder,
  _onChangeText,
  _onChangeCallBack,
  _keyboardType,
  _editable,
  _returnKeyType,
}) {
  return (
    <TextInput
      autoFocus={true}
      style={styles.textInput}
      returnKeyType={_returnKeyType === undefined ? _returnKeyType : "done"}
      editable={_editable}
      keyboardType={_keyboardType}
      placeholder={_placeHolder}
      onChangeText={(_onChangeText) => _onChangeCallBack(_onChangeText)}
      autoCapitalize={_autoCapitalize}
    />
  );
}

InputResponse.propTypes = {
  _editable: PropTypes.bool,
  _onChangeText: PropTypes.string.isRequired,
  _onChangeCallBack: PropTypes.func.isRequired,
  _keyboardType: PropTypes.string.isRequired,
  _placeHolder: PropTypes.string,
  _autoCapitalize: PropTypes.string,
  _returnKeyType: PropTypes.string,
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
