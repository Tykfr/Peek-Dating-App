import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    peek: {
      alignItems: "center",
      marginTop: 38,
    },
    story: {
      marginTop: 19,
      marginBottom: 19,
      alignItems: "center",
    },
    header: {
      marginBottom: 16,
      marginLeft: 13,
      marginRight: 13,
    },
    images: {
      flex: 1,
      marginTop: 16,
      marginLeft: 33,
      marginRight: 33,
      marginBottom: 10,
    },
    prompt: {
      marginLeft: 13,
      marginRight: 13,
      marginTop: 9,
      marginBottom: 9,
    },
    prompt_title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    prompt_text: {
      width: 380,
      height: 66,
      borderRadius: 10,
      borderColor: "#C4C4C4",
      borderWidth: 1,
      marginTop: 9,
    },
    info: {
      marginLeft: 19,
      marginBottom: 6,
      marginTop: 6,
      marginRight: 19,
    },
    info_title: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#C4C4C4",
    },
    info_text: {
      marginLeft: 15,
      fontWeight: "bold",
      fontSize: 13,
      color: "#E5E5E5",
    },
    info_button: {
      marginLeft: 7,
      borderRadius: 4,
    },
  });

export default styles;