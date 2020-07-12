import React from 'react';
import {StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';

const chat = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 31,
        top: 654,
    }
});

const Chat_icon = ({}) => (
    <Icon 
        name="chat-bubble"
        type="material"
        color="#FFFFFF"
        size={50}
        containerStyle={chat.container}
    />
)

export default Chat_icon;
                

