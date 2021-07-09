import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function updateProfileStatus(settingsDB, userID, publicStatus, setPublicStatus) {
    setPublicStatus(publicStatus);
    let userSettings = settingsDB.collection("Settings").doc(userID);
    userSettings.set({"Public" : publicStatus},{ merge: true }).then(()=>{
      console.log("Successfully updated profile status");
    }).catch((error) =>{
      console.error("Error occured when updated profile status");
    })
  }
  
  async function retrieveSettings(
    settingsDB,
    setPublicStatus,
    setEmail,
    setPhoneNumber,
    setNotificationStatus,
    setUserID
  ) {
    let userID = await AsyncStorage.getItem("userID");
    setUserID(userID);
    
    let userSettings = settingsDB.collection("Settings").doc(userID);
    console.log("This is the userID: " + userID);
    userSettings.get().then((doc)=>{
      if(doc.exists){
        setPublicStatus(doc.data().Public);
        setEmail(doc.data().Email)
        setPhoneNumber(doc.data().PhoneNumber)
        setNotificationStatus(doc.data().PushNotifications)
      }else{
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting users settings:", error);
  });
  }
  
  async function updateNotificationStatus(
    settingsDB,
    userID,
    notificationStatus,
    setNotificationStatus
  ) {
    setNotificationStatus(notificationStatus);
    let userSettings = settingsDB.collection("Settings").doc(userID);
    userSettings.set({"PushNotifications": notificationStatus},{ merge: true }).then(()=>{
      console.log("Successfully updated push notifications")
    }).catch((error)=>{
      console.error("Error occurred when updating users notification status")
    });
  }
  
  async function updateEmail(settingsDB, userID, email) {
    let userSettings = settingsDB.collection("Settings").doc(userID);
    userSettings.set({"Email": email}, { merge: true }).then(()=>{
      console.log("Successfully updated email");
    }).catch((error)=>{
      console.error("Error occurred when updating email");
    })
  
  }
  
  async function logout(userID){
    await AsyncStorage.removeItem("userID");
    firebase.auth().signOut()
  }
  
  export {updateProfileStatus, retrieveSettings, updateNotificationStatus,updateEmail, logout }
  



