import React from "react";
import { View, Text, SafeAreaView } from "react-native";

function CompletePage() {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 30 }}>You have logged in!!!</Text>
    </SafeAreaView>
  );
}
export default CompletePage;
