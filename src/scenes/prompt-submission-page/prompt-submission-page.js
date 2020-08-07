import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { PromptTitle, InvertedLogo } from "_atoms";
function PromptSubmissionPage({ navigation, route }) {
  const { prompt } = route.params;
  const { key } = route.params;
  const [result, setResult] = React.useState("");

  const _sumbitResponse = () => {
    let response = result;
    navigation.navigate("PromptEntryPage", {
      key: key,
      response: response,
      prompt: prompt,
    });
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <InvertedLogo />
        </View>
        <View
          style={{
            width: "100%",
            alignSelf: "flex-start",
          }}
        >
          <PromptTitle description={JSON.stringify(prompt)} />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            multiline={true}
            textAlignVertical={"top"}
            maxLength={100}
            keyboardType="default"
            returnKeyType="done"
            style={styles.inputBox}
            onChangeText={(result) => setResult(result)}
            autoFocus={true}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            disabled={!result}
            onPress={() => _sumbitResponse()}
          >
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
export default PromptSubmissionPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  inputBox: {
    width: 300,
    fontSize: 20,
    textAlign: "left",
    flexShrink: 1,
  },
  textInputContainer: {
    width: 330,
    height: 160,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    borderWidth: 2,
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 20,
    flexShrink: 1,
  },
  submitButton: {
    borderRadius: 33,
    borderColor: "#D99202",
    borderWidth: 3,
    height: 50,
    width: 200,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#D99202",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },
});
