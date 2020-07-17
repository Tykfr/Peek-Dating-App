import React from "react";
import PropTypes from "prop-types";
import { TextInput, StyleSheet } from "react-native";

function NumberEntry({ _number, _setNumber, _placeHolder, _editable }) {
  return (
    <TextInput
      style={styles.numberEntry}
      textContentType="telephoneNumber"
      keyboardType="phone-pad"
      placeholder={_placeHolder}
      returnKeyType="done"
      autoFocus
      editable={_editable}
      onChangeText={(_number) => _setNumber(_number)}
    />
  );
}
/*
    for the number input, I need to set up 4 props
    -prop for autoFocus
    -prop for editable
    -prop for onchange text (the actual text and getting the data of the text)
*/

NumberEntry.propTypes = {
  _number: PropTypes.string.isRequired,
  _setNumber: PropTypes.func.isRequired,
  _placeHolder: PropTypes.string.isRequired,
  _editable: PropTypes.bool,
};
export default NumberEntry;

const styles = StyleSheet.create({
  numberEntry: {
    borderBottomWidth: 1,
    width: 350,
    borderRadius: 32,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
  },
});
