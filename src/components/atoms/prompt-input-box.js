import React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types"
import AppLoading from 'expo-app-loading';
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";

function PromptInputBox({ _onPress, _response, _prompt }) {
  let [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={{ height: 55, flexGrow: 1 }}>
          {_prompt != "" && (
            <View
              style={{
                marginBottom: 10,
              }}
            >
              <Text style={styles.promptStyle}>{_prompt}</Text>
            </View>
          )}
          <Text style={{ marginLeft: 10, fontSize: 17 }}>{_response}</Text>
        </View>

        <Ionicons
          name="md-add-circle"
          size={24}
          color="#D99202"
          backgroundColor="white"
          onPress={() => _onPress()}
          style={{ alignSelf: "flex-end" }}
        />
      </View>
    );
  }
}

PromptInputBox.propTypes = {
  _onPress: PropTypes.func,
  _response: PropTypes.string,
  _prompt: PropTypes.string,
};

export default PromptInputBox;
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    height: 140,
    width: "80%",
    borderWidth: 1,
    borderRadius: 21,
    alignSelf: "center",
  },
  promptStyle: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "ReemKufi_400Regular",
    marginLeft: 20,
    marginLeft: 10,
  },
});
