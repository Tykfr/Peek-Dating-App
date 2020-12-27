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
    }
  }
  getUserId = async() => {
    try {
      await AsyncStorage.setItem("userID","164")
      const userId = await AsyncStorage.getItem("userID")
      console.log(userId)
      
      this.setState({
        userId:userId
      })
    } catch (error) {
      console.log("Error retrieving userId")

    }

  }

  // Function to fetch profile data from database 
  fetchProfileData = () => {

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
  .then((response) => response.json)
  .then((responsejson) => {
    // Update prompts here 
    console.log(responsejson.data)
    this.setState({
      isloading:false,
      loaded:true,
      datasource: responsejson.data
    })
  })
  .catch((error) => console.log(error))
  }

  componentDidMount(){
    this.getUserId().then(
      this.fetchProfileData()
    )

  }

  render(){
    const {datasource,isloading,loaded} = this.state
    const {navigation} = this.props
    return (
      <ProfileView 
        datasource={datasource}
        isloading={isloading}
        loaded={loaded}
        navigation={navigation}
      />
    )
  }
}


export default Profile;
