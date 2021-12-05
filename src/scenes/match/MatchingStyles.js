import { StyleSheet } from 'react-native';
import { padding } from '_styles';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: "center",
        backgroundColor: "#B69159",
      },
    
      action_btn_continer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        // backgroundColor:"white"
      },
    
      card_container: {
        backgroundColor: "#BF9E6C",
        height: "80%",
        width: "90%",
        borderRadius: 30,
        marginBottom: 20,
        justifyContent:"space-around",
        paddingTop:15

      },
      name_age_container: {
        marginTop: 30,
        marginLeft: 15,
      },

})
export default styles;