import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StartPage,
  LoginPage,
  NumberEntryPage,
  VerificationCodePage,
  NameEntryPage,
  EmailEntryPage,
  BirthdayEntryPage,
  GenderIdentityPage,
} from "_scenes/";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="NumberEntryPage" component={NumberEntryPage} />
        <Stack.Screen
          name="VerificationPage"
          component={VerificationCodePage}
        />
        <Stack.Screen name="NameEntryPage" component={NameEntryPage} />
        <Stack.Screen name="EmailEntryPage" component={EmailEntryPage} />
        <Stack.Screen name="BirthdayEntryPage" component={BirthdayEntryPage} />
        <Stack.Screen
          name="GenderIdentityPage"
          component={GenderIdentityPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//---------------------------------------------------------------------------------------------------------------------------------------------
// import * as React from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   Button,
//   Alert,
//   ActivityIndicator,
//   Platform,
// } from "react-native";
// import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
// import * as firebase from "firebase";

// // PROVIDE VALID FIREBASE CONFIG HERE
// // https://firebase.google.com/docs/web/setup
// const FIREBASE_CONFIG = {
//   apiKey: "AIzaSyAjBXrAls5vRG5xb9X_VkY5iInliP4-66Y",
//   authDomain: "peek-365d4.firebaseapp.com",
//   databaseURL: "https://peek-365d4.firebaseio.com",
//   projectId: "peek-365d4",
//   storageBucket: "peek-365d4.appspot.com",
//   messagingSenderId: "933581565982",
//   appId: "1:933581565982:web:b88ac323361ff9f1d7fe0f",
//   measurementId: "G-E8TT38XSQV",
// };

// try {
//   if (FIREBASE_CONFIG.apiKey) {
//     firebase.initializeApp(FIREBASE_CONFIG);
//   }
// } catch (err) {
//   // ignore app already initialized error on snack
// }

// export default function PhoneAuthScreen() {
//   const recaptchaVerifier = React.useRef(null);
//   const verificationCodeTextInput = React.useRef(null);
//   const [phoneNumber, setPhoneNumber] = React.useState("");
//   const [verificationId, setVerificationId] = React.useState("");
//   const [verifyError, setVerifyError] = React.useState();
//   const [verifyInProgress, setVerifyInProgress] = React.useState(false);
//   const [verificationCode, setVerificationCode] = React.useState("");
//   const [confirmError, setConfirmError] = React.useState();
//   const [confirmInProgress, setConfirmInProgress] = React.useState(false);
//   const isConfigValid = !!FIREBASE_CONFIG.apiKey;

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
//           ref={recaptchaVerifier}
//           firebaseConfig={FIREBASE_CONFIG}
//         />
//         <Text style={styles.title}>Firebase Phone Auth</Text>
//         <Text style={styles.subtitle}>using expo-firebase-recaptcha</Text>
//         <Text style={styles.text}>Enter phone number</Text>
//         <TextInput
//           style={styles.textInput}
//           autoFocus={isConfigValid}
//           autoCompleteType="tel"
//           keyboardType="phone-pad"
//           textContentType="telephoneNumber"
//           placeholder="+1 999 999 9999"
//           editable={!verificationId}
//           onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
//         />
//         <Button
//           title={`${verificationId ? "Resend" : "Send"} Verification Code`}
//           disabled={!phoneNumber}
//           onPress={async () => {
//             const phoneProvider = new firebase.auth.PhoneAuthProvider();
//             try {
//               setVerifyError(undefined);
//               setVerifyInProgress(true);
//               setVerificationId("");
//               const verificationId = await phoneProvider.verifyPhoneNumber(
//                 phoneNumber,
//                 // @ts-ignore
//                 recaptchaVerifier.current
//               );
//               setVerifyInProgress(false);
//               setVerificationId(verificationId);
//               verificationCodeTextInput.current?.focus();
//             } catch (err) {
//               setVerifyError(err);
//               setVerifyInProgress(false);
//             }
//           }}
//         />
//         {verifyError && (
//           <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
//         )}
//         {verifyInProgress && <ActivityIndicator style={styles.loader} />}
//         {verificationId ? (
//           <Text style={styles.success}>
//             A verification code has been sent to your phone
//           </Text>
//         ) : undefined}
//         <Text style={styles.text}>Enter verification code</Text>
//         <TextInput
//           ref={verificationCodeTextInput}
//           style={styles.textInput}
//           editable={!!verificationId}
//           placeholder="123456"
//           onChangeText={(verificationCode) =>
//             setVerificationCode(verificationCode)
//           }
//         />
//         <Button
//           title="Confirm Verification Code"
//           disabled={!verificationCode}
//           onPress={async () => {
//             try {
//               setConfirmError(undefined);
//               setConfirmInProgress(true);
//               const credential = firebase.auth.PhoneAuthProvider.credential(
//                 verificationId,
//                 verificationCode
//               );
//               const authResult = await firebase
//                 .auth()
//                 .signInWithCredential(credential);
//               setConfirmInProgress(false);
//               setVerificationId("");
//               setVerificationCode("");
//               verificationCodeTextInput.current?.clear();
//               Alert.alert("Phone authentication successful!");
//             } catch (err) {
//               setConfirmError(err);
//               setConfirmInProgress(false);
//             }
//           }}
//         />
//         {confirmError && (
//           <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
//         )}
//         {confirmInProgress && <ActivityIndicator style={styles.loader} />}
//       </View>
//       {!isConfigValid && (
//         <View style={styles.overlay} pointerEvents="none">
//           <Text style={styles.overlayText}>
//             To get started, set a valid FIREBASE_CONFIG in App.tsx.
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   content: {
//     marginTop: 50,
//   },
//   title: {
//     marginBottom: 2,
//     fontSize: 29,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     marginBottom: 10,
//     opacity: 0.35,
//     fontWeight: "bold",
//   },
//   text: {
//     marginTop: 30,
//     marginBottom: 4,
//   },
//   textInput: {
//     marginBottom: 8,
//     fontSize: 17,
//     fontWeight: "bold",
//   },
//   error: {
//     marginTop: 10,
//     fontWeight: "bold",
//     color: "red",
//   },
//   success: {
//     marginTop: 10,
//     fontWeight: "bold",
//     color: "blue",
//   },
//   loader: {
//     marginTop: 10,
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "#FFFFFFC0",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   overlayText: {
//     fontWeight: "bold",
//   },
// });
// //--------------------------------------------------------------------------------------------------------------------------------------------
