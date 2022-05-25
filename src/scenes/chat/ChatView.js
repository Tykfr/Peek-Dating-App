import styles from "./ChatStyles";
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Button,
    ActivityIndicator,
  } from "react-native";
  import { GiftedChat } from 'react-native-gifted-chat';


const ChatView = (props) => {
    const {messages} = props
    return (
        <SafeAreaView>
            <GiftedChat messages={messages}
                user={user}/>
        </SafeAreaView>
    )
}

export default ChatView;