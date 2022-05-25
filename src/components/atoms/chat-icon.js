import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Chat_icon = ({navigation}) => (
  <Icon 
    name="chat-bubble" 
    type="material" 
    color="#FFFFFF" 
    size={50}
    onPress={()=> {
      navigation.navigate("Chat", {screen: "ChatScreen"})
    }}
  />
);

export default Chat_icon;
