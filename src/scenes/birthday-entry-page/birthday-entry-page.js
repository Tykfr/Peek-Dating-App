import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { OnboardingTitle, ContinueButton } from "_atoms";
/**
 * NTS: Get current date and subtract it from the date the user input to determine their age...restrict access of ages
 * younger than 18
 *
 */
function calculateAge(dateOfBirth) {
  const current = new Date();

  let potentialAge = current.getUTCFullYear() - dateOfBirth.getUTCFullYear();
  if (current.getUTCMonth() < dateOfBirth.getUTCMonth()) {
    return (potentialAge = potentialAge - 1);
  }
  if (current.getUTCMonth() === dateOfBirth.getUTCMonth()) {
    if (current.getUTCDate() < dateOfBirth.getUTCDate()) {
      return (potentialAge = potentialAge - 1);
    }
  }

  return potentialAge;
}

function BirthdayEntryPage({ navigation, route }) {
  const { userData } = route.params;
  const [date, setDate] = React.useState(new Date());

  let dateOfBirth = new Date();
  let age;

  const onChange = (event, selectedDate) => {
    dateOfBirth = selectedDate || date;
    age = calculateAge(dateOfBirth);
  };

  const _genderIdentityPage = () => {
    userData.birthYear = dateOfBirth.getFullYear();
    userData.birthMonth = dateOfBirth.getMonth() + 1; //The plus one is necesary because the months are counting from 0.
    userData.birthDay = dateOfBirth.getDate();

    navigation.navigate("GenderIdentityPage", {
      userData: userData,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={{ width: "100%" }}>
        <View style={styles.logoContainer}>
          <Image source={require("_assets/images/Peek_Logo_Inverted.png")} />
        </View>

        <View style={styles.titleContainer}>
          <OnboardingTitle description={"What is your date of birth ?"} />
        </View>
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            value={date}
            mode={"date"}
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        </View>
      </View>

      <View style={styles.continueButtonContainer}>
        <ContinueButton _onPress={() => _genderIdentityPage()} />
      </View>
    </SafeAreaView>
  );
}

export default BirthdayEntryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginTop: 28,
    marginBottom: 14,
  },

  continueButtonContainer: {
    marginBottom: 40,
  },
  titleContainer: {
    marginLeft: 16,
    // backgroundColor: "blue",
    marginBottom: 10,
  },
  datePickerContainer: {
    width: "100%",
    //  backgroundColor: "grey"
  },
});
