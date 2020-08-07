import React from "react";
import { Image } from "react-native";

function InvertedLogo() {
  return (
    <Image
      style={{ height: 50, width: 50 }}
      source={require("_assets/images/Peek_Logo_Inverted.png")}
    />
  );
}

export default InvertedLogo;
