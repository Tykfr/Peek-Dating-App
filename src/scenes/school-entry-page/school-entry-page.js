import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

function SchoolEntryPage({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Birthday Entry Page</Text>
      </View>
    </SafeAreaView>
  );
}
export default SchoolEntryPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
