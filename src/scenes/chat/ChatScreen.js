import React, { Component } from "react";
import ChatView from "./ChatView";
import * as firebase from "firebase";
import "firebase/firestore";


class Chat extends Component{
    constructor(props){
        super(props);


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
    fetchMessages = async () =>{
        await this.getUserId();

        const db = firebase.firestore();
        const userchats = db.collection("users").doc(this.state.userId);

    }

    render(){
        return(
            <ChatView/>
        )
    }
}

export default Chat;