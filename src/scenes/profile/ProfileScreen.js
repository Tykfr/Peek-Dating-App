import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import ProfileView from "./ProfileView";

class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      isloading: true,
      loaded:false,
      datasource:[],
      userId:"",
      prompts: [],
    }
  }
  getUserId = async() => {
    try {
      await AsyncStorage.setItem("userID","234")
      const userID = await AsyncStorage.getItem("userID")
      

      this.setState({
        userId:userID
      })
      
    } catch (error) {
      console.log("Error retrieving userId")

    }

  }

  // Function to fetch profile data from database 
  fetchProfileData = async () => {

    await this.getUserId()

    fetch ( "https://www-student.cse.buffalo.edu/peek_mobile_dating/retrievePrompts.php",{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: this.state.userId,

    })
    }
  )
  .then((response) => response.json())
  .then((json) => {
    // Update prompts here 
    const data = JSON.parse(JSON.stringify(json));
    console.log(data)
    this.setState({
      isloading:false,
      loaded:true,
    })
    if(data.Prompt_1.length > 0){
      var prompt = this.state.prompts.concat([[data.Prompt_1,data.Response_1]])
      this.setState({
        prompts: prompt
      })
    }
    if(data.Prompt_2.length > 0){
      var prompt = this.state.prompts.concat([data.Prompt_2,data.Response_2])
      this.setState({
        prompts: prompt
      })
    }
    if(data.Prompt_3.length > 0){
      var prompt = this.state.prompts.concat([data.Prompt_3,data.Response_3])
      this.setState({
        prompts: prompt
      })
    }
    console.log(this.state.prompts)

  })
  .catch((error) => console.log(error))
  }

  componentDidMount(){
    this.fetchProfileData(this.state.userId)
    

  }

  render(){
    const {prompts,isloading,loaded} = this.state
    const {navigation} = this.props
    return (
      <ProfileView 
        prompts={prompts}
        isloading={isloading}
        loaded={loaded}
        navigation={navigation}
      />
    )
  }
}


export default Profile;
