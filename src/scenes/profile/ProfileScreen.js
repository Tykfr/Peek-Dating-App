import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import ProfileView from "./ProfileView";
import * as firebase from "firebase";
class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      isloading: true,
      loaded:false,
      datasource:[],
      userId:"",
      prompts: [],
      pictures:[],
      job:"Add Job Title",
      ethnicity:"Other",
      name:"",
      school:"Add School",
      location:"Add Location",
      gender:"Other",
      bio:"",
      age:"18",
    }
  }
  getUserId = async() => {
    try {
      const userID = await AsyncStorage.getItem("userID")
      this.setState({
        userId:userID
      })
      
    } catch (error) { console.log("Error retrieving userId")}

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
      var prompt = this.state.prompts.concat([[data.Prompt_2,data.Response_2]])
      this.setState({
        prompts: prompt
      })
    }
    if(data.Prompt_3.length > 0){
      var prompt = this.state.prompts.concat([[data.Prompt_3,data.Response_3]])
      this.setState({
        prompts: prompt
      })
    }
    console.log(this.state.prompts)

  })
  .catch((error) => console.log(error))

  
  fetch ("https://www-student.cse.buffalo.edu/peek_mobile_dating/retrieveProfile.php", {
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
    const data = JSON.parse(JSON.stringify(json));

    console.log(data)
    this.updateProfile(data)

  })
  .catch((error) => console.log(error))
  
  }

  updateProfile(data){

    if(data.Bio.length > 0){ this.setState({bio:data.Bio})}
    if(data.Gender.length > 0){ this.setState({gender:data.Gender})}
    if(data.City_State.length > 0){ this.setState({location:data.City_State})}
    if(data.Ethnicity.length > 0){  this.setState({ethnicity:data.Ethnicity})}
    if(data.School.length > 0){  this.setState({school:data.School})}
    if(data.Occupation.length > 0){  this.setState({job:data.Occupation})}
    if(data.BirthYear.length > 0){ this.setState({age: this.calculateage(data.BirthYear,data.BirthMonth,data.BirthDate)})}
  }
  calculateage(birthyear,birthmonth,birthdate){
    today = new Date();
    year = today.getFullYear();
    today_month = today.getMonth();
    today_day = today.getDate();
    age = year - birthyear;
    if(parseInt(birthmonth) == parseInt(today_month)+1){
      return age-1
    }
    if(parseInt(birthmonth) == parseInt(today_month)+1 && parseInt(today_day) < parseInt(birthdate)){
      return age-1
    }
    return age;
  }
  // Function to get Images from the Firebase
  fetchImages = async () => {
    await this.getUserId()
    for(let x = 0; x < 6; x++){
      let imageRef = firebase.storage().ref("user_images/" + "user_" + this.state.userId + "/img_" + x);
      imageRef
      .getDownloadURL()
      .then((url) => {
        var picture = this.state.pictures.concat([url])
        this.setState({
          pictures: picture
        });
      })
      .catch((error) => console.log(error))
    }
  }


  componentDidMount(){
    this.fetchProfileData()
    this.fetchImages()   

  }

  render(){
    const {name,age,bio,pictures,prompts,job,school,ethnicity,location,gender,isloading,loaded} = this.state
    const {navigation} = this.props
    return (
      <ProfileView
        name={name}
        bio={bio}
        age={age} 
        pictures={pictures}
        prompts={prompts}
        job={job}
        ethnicity={ethnicity}
        location={location}
        gender={gender}
        school={school}
        isloading={isloading}
        loaded={loaded}
        navigation={navigation}
      />
    )
  }
}


export default Profile;
