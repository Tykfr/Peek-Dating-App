import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import PropTypes from "prop-types";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { ListOfPrompts } from "_utils/list-of-prompts";

function PromptOptions({ _onPress }) {
  const prompts = ListOfPrompts;

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ borderWidth: 1, width: "100%" }}
          data={prompts}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.promptStyle}
              onPress={() => _onPress(item.prompt)}
            >
              <Text style={styles.textStyle}>{item.prompt}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}
export default PromptOptions;
PromptOptions.propTypes = {
  _onPress: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  promptStyle: {
    height: 70,
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10,
    textAlign: "left",
  },
});
