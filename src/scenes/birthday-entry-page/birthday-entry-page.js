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
  const { userID } = JSON.parse(JSON.stringify(route.params));
  console.log("UserID: " + userID);
  const [date, setDate] = React.useState(new Date());
  let dateOfBirth = new Date();
  let age;
  const onChange = (event, selectedDate) => {
    dateOfBirth = selectedDate || date;
    age = calculateAge(dateOfBirth);
  };

  const _genderIdentityPage = () => {
    navigation.navigate("GenderIdentityPage", {
      userID: userID,
      birthYear: dateOfBirth.getFullYear(),
      birthMonth: dateOfBirth.getMonth() + 1,
      birthDay: dateOfBirth.getDate(),
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("_assets/images/Peek_Logo_Inverted.png")}
          />
        </View>
        <View style={styles.datePickerContainer}>
          <View style={styles.titleContainer}>
            <OnboardingTitle description={"What is your date of birth ?"} />
          </View>
          <View>
            <DateTimePicker
              value={date}
              mode={"date"}
              display="default"
              onChange={onChange}
              maximumDate={new Date()}
            />
          </View>
        </View>
      </View>

      <View style={styles.continueButtonContainer}>
        <ContinueButton _onPress={_genderIdentityPage} />
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
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginVertical: 20,
  },
  title: {
    position: "absolute",
    top: 100,
    left: 16,
    marginRight: 18,
  },
  continueButtonContainer: {
    marginBottom: 10,
  },
  titleContainer: { marginBottom: 20 },
  datePickerContainer: { width: "100%" },
});
