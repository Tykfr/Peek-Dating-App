import React, { Component } from "react";
import ChatView from "./ChatView";
import * as firebase from "firebase";
import "firebase/firestore";

class Chat extends Component{
    constructor(props){
        super(props);
        this.docs = firebase.firestore().collection("chats").doc(firebase.auth().currentUser).collection("messages");
        this.state = {
          messages: [],
        }

    }
    getUserId = async() => {
        try {
          const userID = firebase.auth().currentUser;
          const db = firebase.firestore();
      
          this.setState({
            userId: userID.uid
          })
          
        } catch (error) { console.log("Error retrieving userId")}
    
    }
    getMessagesData = (querySnapshot) =>{
        const messages = [];
        querySnapshot.forEach((res) => {
          const data = res.data();
          messages.push({
            data
          });
          console.log(data)
        });
        this.setState({
          messages
        })
      }
    componentDidMount(){
      this.fetchMessages()  
    
      }
    render(){
      const {messages} = this.state
        return(
            <ChatView
            messages={messages}
            />
        )
    }
}

export default Chat;