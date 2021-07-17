import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    // container:{
    //     flex:1,
    //     backgroundColor:"#FFFFFF",
    //     justifyContent:"center",
    //     alignItems:"center"
    // },
    container: {
        flex: 1,
        // justifyContent:"space-between",
        alignContent: "center",
        backgroundColor: "#B69159",
      },
      titleContainer: {
        // backgroundColor:"green",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        // flexShrink:1
      },
      title: {
        // fontFamily: "Pacifico_400Regular",
        fontSize: 45,
      },
    
      action_btn_continer: {
        flexDirection: "row",
        justifyContent: "space-around",
        //  backgroundColor:"red",
        width: "100%",
        // flexShrink:1
      },
    
      card_container: {
        backgroundColor: "#BF9E6C",
        height: "80%",
        width: "90%",
        borderRadius: 30,
        marginBottom: 20,
      },
      name_age_container: {
        // backgroundColor:"green",
        marginTop: 15,
        marginLeft: 15,
      },

})
export default styles;