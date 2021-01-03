import React, {useEffect} from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import PromptOptions from "_atoms/prompt-option";
function PromptSelectionPage({ navigation, route }) {
  const { key } = route.params;

  const _promptSubmissionHandler = (prompt) => {
    navigation.navigate("PromptSubmissionPage", {
      prompt: prompt,
      key: key,
    });
  };

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
   
  })
  return (
    <SafeAreaView style={styles.container}>
      <PromptOptions _onPress={_promptSubmissionHandler} />
    </SafeAreaView>
  );
}
export default PromptSelectionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
