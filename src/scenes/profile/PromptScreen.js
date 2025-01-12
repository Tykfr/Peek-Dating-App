import React, {useState, Component} from "react";
import PromptView from "./PromptView";
import * as firebase from "firebase";
import "firebase/firestore";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Prompt_box } from "_molecules";

class PromptScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      prompt: "",
      response: "",
      old_prompt:props.route.params.prompt,
    }
  }
  setPrompt = (prompt) => {
    this.setState({
      isModalVisible:true,
      prompt: prompt
    })
  }
  updateResponse = (input) => {
    this.setState({ response: input })
  }

  updateModal = () =>{
    this.setState({
      isModalVisible:false,
    })
  }

  // Update the prompt on the database
  updatePrompt = async (prompt,response,navigation) => {
    const userID = firebase.auth().currentUser;
    const db = firebase.firestore();
    const userdata = db.collection("users").doc(userID.uid);
    const updatedprompt ={};
    if(this.state.old_prompt!="Add Prompt"){
      console.log(this.state.old_prompt);
      userdata.update({
        [`prompts.${this.state.old_prompt}`]: firebase.firestore.FieldValue.delete()});
    }
    updatedprompt[`prompts.${prompt}`] = response
    userdata.update(updatedprompt)
    .then(() => { navigation.navigate("Profile");
   })
  
  }

  renderItem = ({item}) => {
  return (
  <View>
    <TouchableOpacity onPress={() => this.setPrompt(item.prompt)}>
    <Prompt_box prompt={item}/>
    </TouchableOpacity>
  </View>
  )}
  
  render() {
    const {isModalVisible,prompt,response} = this.state
    const {navigation} = this.props
    return(
      <PromptView
        navigation={navigation}
        isModalVisible={isModalVisible}
        prompt={prompt}
        response={response}
        updatePrompt={this.updatePrompt}
        updateModal={this.updateModal}
        updateResponse={this.updateResponse}
        renderItem={this.renderItem}
      />
    )
    
  }
}

export default PromptScreen;
