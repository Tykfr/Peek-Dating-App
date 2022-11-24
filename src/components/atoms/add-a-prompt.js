import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types"

function AddAPrompt({ _onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress}>
        <Text style={styles.textStyle}> Add a prompt</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddAPrompt;
AddAPrompt.propTypes = {
  _onPress: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  textStyle: {
    color: "#D99202",
    fontSize: 20,
  },
});
