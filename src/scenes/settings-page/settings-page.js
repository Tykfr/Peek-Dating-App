import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Switch,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { SubTitle, SettingsButtonTitle, InfoText } from "_atoms";
import { AppLoading } from "expo";
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";
import AsyncStorage from "@react-native-community/async-storage";
import * as firebase from "firebase";

// import { StatusBar } from "expo-status-bar";

function SettingsPage() {
  const profileDescription =
    "When private, your profile will be hidden from new people, but you will still be able to talk with your current matches.";
  const [publicStatus, setPublicStatus] = React.useState();

  const [img, setImg] = React.useState("");
  const [email, setEmail] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [notificationStatus, setNotificationStatus] = React.useState();
  const [userID, setUserID] = React.useState();
  const temp = "_assets/images/defaultPortait.jpg";

  //due to lag of data retrieval, update application to store user settings to device on sign up and retrieve from device.
  function getImage(){
    var storage = firebase.storage();
    storage.ref('user_images/user_"231"/img_0').getDownloadURL()
      .then(function (url) {
        setImg(url);
    }).catch(function(error){
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          console.error("file doesnt exist")
          break;
    
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.error("no permission to access")
          break;
    
        case 'storage/canceled':
          // User canceled the upload
          console.error("user cancelled process");
          break;
      }
  
    });
  
    
  }
  useEffect(() => {
    getImage();
    retrieveSettings(
      setPublicStatus,
      setEmail,
      setPhoneNumber,
      setNotificationStatus,
      setUserID
    );

    // make an api call to retrive userSettings from data base
  }, []);

  let [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      
      <Image style= {{height: 100, width:100}}source={{uri: img !== null ? img : temp}}/>
      /*
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-between",
          flexGrow: 1,
        }}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <SafeAreaView style={styles.container}>
         // { Profile Status Section }
          <View style={{ marginTop: 20 }}>
            <View style={{ marginLeft: 20 }}>
              <SubTitle description={"Profile Status"} />
            </View>

            <View style={styles.switchStyle}>
              <SettingsButtonTitle description={"Public"} />
              <Switch
                onValueChange={() => {
                  updateProfileStatus(userID, !publicStatus, setPublicStatus);
                }}
                value={publicStatus}
              />
            </View>

            <View style={styles.infoTextContainer}>
              <InfoText description={profileDescription} />
            </View>

           // { Phone & Email Section }
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={"Phone & Email"} />
            </View>

            <View style={styles.switchStyle}>
              <SettingsButtonTitle description={"Phone Number:"} />
              <View style={{ justifyContent: "center" }}>
                <InfoText description={phoneNumber} />
              </View>
            </View>

            <View style={styles.switchStyle}>
              <SettingsButtonTitle description={"Email:"} />
              <View style={{ justifyContent: "center" }}>
                <TextInput
                  placeholder={email}
                  style={{ fontSize: 18 }}
                  placeholderTextColor="#656565"
                  // value={email}
                  onChangeText={(email) => {
                    setEmail(email);
                    // console.log(email);
                  }}
                  onEndEditing={() => updateEmail(userID, email)}
                  // onEndEditing = {() => }
                />
              </View>
            </View>

          //  { Notifications Section }
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={"Notifications"} />
            </View>
            <View style={styles.switchStyle}>
              <SettingsButtonTitle description={"Push Notifications"} />
              <Switch
                onValueChange={() =>
                  updateNotificationStatus(
                    userID,
                    !notificationStatus,
                    setNotificationStatus
                  )
                }
                value={notificationStatus}
              />
            </View>

           // { Implement Connected Accounts after adding them to the login process }
            {/* Connected Accounts Section
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <SubTitle description={"Connected Accounts"} />
              </View>
              <View style={styles.switchStyle}>
                <SettingsButtonTitle description={"Apple"} />
                <Switch />
              </View>

              <View style={styles.switchStyle}>
                <SettingsButtonTitle description={"Facebook"} />
                <Switch />
              </View>

              <View style={styles.switchStyle}>
                <SettingsButtonTitle description={"Google"} />
                <Switch />
             // </View> }

          //  { Legal Section }
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={"Legal"} />
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%" }}>
                <Text style={styles.buttonStyle}>Terms of Service</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%" }}>
                <Text style={styles.buttonStyle}>Privacy Concerns</Text>
              </TouchableOpacity>
            </View>
          //  { Help Section }
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={"Help"} />
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%" }}>
                <Text style={styles.buttonStyle}>Report</Text>
              </TouchableOpacity>
            </View>

            //{ Logout & Delete Account }
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={""} />
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
                <Text style={styles.buttonStyle}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%", alignItems: "center" }}>
                <Text style={styles.buttonStyle}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    */);
  }
}

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  switchStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#919eb3",
    paddingVertical: 5,
    marginBottom: 5,
  },
  infoTextContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonStyle: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "ReemKufi_400Regular",
  },
});

async function updateProfileStatus(userID, publicStatus, setPublicStatus) {
  setPublicStatus(publicStatus);

  fetch(
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/updateProfileStatus.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userID,
        status: Number(publicStatus),
      }),
    }
  ).catch((error) => {
    console.error(error);
  });
}

async function retrieveSettings(
  setPublicStatus,
  setEmail,
  setPhoneNumber,
  setNotificationStatus,
  setUserID
) {
  let userID = await AsyncStorage.getItem("userID");
  setUserID(userID);
  fetch(
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/retrieveSettings.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userID,
      }),
    }
  )
    .then((response) => response.json())
    .then((responseJson) => {
      const userSettings = JSON.parse(JSON.stringify(responseJson)); //The userID needs to be a string so that it can be stored in async storage
      setPublicStatus(!!userSettings.Visibility);
      setEmail(userSettings.Email);
      setPhoneNumber(userSettings.PhoneNumber);
      setNotificationStatus(!!userSettings.PushNotificationStatus);
      //naviagation that navigate will be called her to go to the main stack.
    })
    .catch((error) => {
      console.error(error);
    });
}

async function updateNotificationStatus(
  userID,
  notificationStatus,
  setNotificationStatus
) {
  setNotificationStatus(notificationStatus);
  fetch(
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/updateNotificationStatus.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userID,
        status: Number(notificationStatus),
      }),
    }
  ).catch((error) => {
    console.error(error);
  });
}

async function updateEmail(userID, email) {
  console.log(userID);
  console.log(email);
  fetch(
    "https://www-student.cse.buffalo.edu/peek_mobile_dating/updateEmail.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userID,
        email: email,
      }),
    }
  )
    .then((response) => response.json())
    .then((responseJson) => {
      const result = JSON.parse(JSON.stringify(responseJson)); //The userID needs to be a string so that it can be stored in async storage
      console.log(result);
      //naviagation that navigate will be called her to go to the main stack.
    })
    .catch((error) => {
      console.error(error);
    });
}


