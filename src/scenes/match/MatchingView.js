import styles from "./MatchingStyles";
import React from "react";
import {Text, View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Name_Age, No_Like_Icon, Like_Icon,Story_Button} from "../../components/atoms"




const MatchingView = ({}) => {

    const temp = "_assets/images/defaultPortait.jpg";
    const [userID, setUserID] = React.useState();
    const [img0, setImg0] = React.useState("");
    const [img1, setImg1] = React.useState("");
    const [img2, setImg2] = React.useState("");
    const [img3, setImg3] = React.useState("");
    const [img4, setImg4] = React.useState("");
    const [img5, setImg5] = React.useState("");
    const [name, setName] = React.useState("Tasha Beacon");
    const [age, setAge] = React.useState(22);
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Peek</Text>
          <Image
            style={{ height: 50, width: 50 }}
            source={require("_assets/images/Peek_Logo_Inverted.png")}
          />
        </View>

        <View style={{ width: "100%", alignItems: "center", flexShrink: 1 }}>
          {/* This is the card holder */}
          <View style={styles.card_container}>
            <View style={styles.name_age_container}>
              <Name_Age _name={name} _age={age} />
            </View>
          </View>

          <View style={styles.action_btn_continer}>
            <No_Like_Icon />
            <Story_Button />
            <Like_Icon />
          </View>
        </View>
        {/* <ScrollView>

          
            <View style={{alignItems:"center"}}>

            {img0 !== "" &&
            <Image style={{width: 200, 
                    height: 200,}} source ={{uri:img0}}/>}

            {img1 !== "" && 
            <Image style={{width: 200,
                    height: 200,}} source ={{uri: img1}}/>}
            {img2 !== "" && 
            <Image style={{width: 200, 
                    height: 200,}} source ={{uri: img2}}/>}
            {img3 !== "" && 
            <Image style={{width: 200,
                    height: 200,}} source ={{uri: img3}}/>}
            {img4 !== "" && 
            <Image style={{width: 200,
                    height: 200,}} source ={{uri: img4}}/>}
            {img5 !== "" && 
            <Image style={{width: 201,
                    height: 200,}} source ={{uri: img5}}/>}
            </View>
            </ScrollView> */}
      </SafeAreaView>  
    )
}

export default MatchingView;