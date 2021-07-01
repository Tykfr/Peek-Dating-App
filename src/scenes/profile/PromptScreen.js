import React, {useState, Component} from "react";
import ProfileView from "./PromptView";
import * as firebase from "firebase";
import "firebase/firestore";

class PromptScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      prompt: "",
      response: "",
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
    const updatedprompt = "prompts." + prompt;
    userdata.update({
      updatedprompt :response
    }).then(() => { navigation.navigate("Profile"); })
  
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
        renderItem={this.renderItem}
      />
    )
    
  }
}

export default PromptScreen;
