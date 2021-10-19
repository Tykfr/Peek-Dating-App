import {StyleSheet, Dimensions} from "react-native"
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    cardContainer: {
      justifyContent: "space-between",
      width: Dimensions.get("window").width * 0.7,
      height: Dimensions.get("window").height * 0.5,
      backgroundColor: "#E7E0D5",
      borderRadius: 33,
      backfaceVisibility:"hidden"
    },
  
    promptText: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 30,
      textAlign: "left",
      marginLeft: 20,
      marginBottom: 25,
      marginRight: 15,
    },
    promptResponse: {
      fontSize: 20,
      marginTop: 30,
      textAlign: "left",
      marginLeft: 20,
      marginBottom: 25,
      marginRight: 15,
    },
    dashedLine: {
      width: "100%",
      borderStyle: "dashed",
      borderWidth: 0.5,
      borderRadius: 1,
    },
    logoStyle:{
      width: 75,
      height: 75, 
      marginBottom: 15 
    },
    heartStyle:{
      width: 30,
      height: 30, 
      marginBottom: 15 
    },
    flatListStyle:{
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
    },
    imageStyle:{
      width: "100%", 
      height: "100%", 
      borderRadius: 33
    },
    flipCard:{
      backfaceVisibility:"hidden",
      // position:"absolute"
    }
  });
  
  export default styles;
  