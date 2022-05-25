import React from "react";
import { ChatScreen } from "_scenes/chat";
import { createStackNavigator } from "@react-navigation/stack";

const ChatStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator headerMode="none">
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
    </ChatStack.Navigator>
  );
}

export default ChatStackScreen;