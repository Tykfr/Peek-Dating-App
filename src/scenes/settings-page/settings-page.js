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
} from "react-native";
import { SubTitle, SettingsButtonTitle, InfoText } from "_atoms";
import AppLoading from 'expo-app-loading';
import { useFonts, ReemKufi_400Regular } from "@expo-google-fonts/reem-kufi";
import * as firebase from "firebase";
import {updateProfileStatus, retrieveSettings, updateNotificationStatus,updateEmail, logout} from "./settings-functions"

// import { StatusBar } from "expo-status-bar";

function SettingsPage() {
  require("firebase/firestore");
  let settingsDB = firebase.firestore();
  const profileDescription =
    "When private, your profile will be hidden from new people, but you will still be able to talk with your current matches.";
  const [publicStatus, setPublicStatus] = React.useState();

  const [img, setImg] = React.useState("");
  const [email, setEmail] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [notificationStatus, setNotificationStatus] = React.useState();
  const [userID, setUserID] = React.useState();

  //due to lag of data retrieval, update application to store user settings to device on sign up and retrieve from device.

  useEffect(() => {
    retrieveSettings(
      settingsDB,
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
      
    
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-between",
          flexGrow: 1,
        }}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content"/>
          {/* { Profile Status Section } */}
          <View style={{ marginTop: 20 }}>
            <View style={{ marginLeft: 20 }}>
              <SubTitle description={"Profile Status"} />
            </View>

            <View style={styles.switchStyle}>
              <SettingsButtonTitle description={"Public"} />
              <Switch
                onValueChange={() => {
                  updateProfileStatus(settingsDB,userID, !publicStatus, setPublicStatus);
                }}
                value={publicStatus}
              />
            </View>

            <View style={styles.infoTextContainer}>
              <InfoText description={profileDescription} />
            </View>

           {/* //{ Phone & Email Section } */}
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
                  onEndEditing={() => updateEmail(settingsDB, userID, email)}
                  // onEndEditing = {() => }
                />
              </View>
            </View>

          {/* //  { Notifications Section } */}
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={"Notifications"} />
            </View>
            <View style={styles.switchStyle}>
              <SettingsButtonTitle description={"Push Notifications"} />
              <Switch
                onValueChange={() =>
                  updateNotificationStatus(settingsDB,
                    userID,
                    !notificationStatus,
                    setNotificationStatus
                  )
                }
                value={notificationStatus}
              />
            </View>

           {/* // { Implement Connected Accounts after adding them to the login process } */}
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
            //  </View> */}

          {/* //  { Legal Section } */}
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
          {/* //  { Help Section } */}
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={"Help"} />
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%" }}>
                <Text style={styles.buttonStyle}>Report</Text>
              </TouchableOpacity>
            </View>

            {/* //{ Logout & Delete Account } */}
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <SubTitle description={""} />
            </View>
            <View style={styles.switchStyle}>
              <TouchableOpacity style={{ width: "100%", alignItems: "center" }} onPress={() => logout(userID)}>
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
    
   );
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

