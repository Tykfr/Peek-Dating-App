import styles from "./MatchingStyles";
import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import {
  Name_Age,
  No_Like_Icon,
  Like_Icon,
  Story_Button,
} from "../../components/atoms";
import SwipeDeck from "_components/organisms/SwipeDeck";

const MatchingView = ({}) => {
  const temp = "_assets/images/defaultPortait.jpg";
  const [userID, setUserID] = React.useState();
  const imagePath = "../../assets/images/stock_photos/";
  const img_1 = imagePath + "img_1.jpg";
  const img_2 = imagePath + "img_2.jpg";
  const img_4 = imagePath + "img_4.jpg";
  const img_5 = imagePath + "img_5.jpg";
  const img_6 = imagePath + "img_6.jpg";

  const DATA = [
    {
      isImage: true,
      uri: require(img_5),
      prompt: "Bio: ",
      response:
        "Recent college graduate from NY. New to the Colorado Springs area. Looking for new people to meet and make friends and who knows, maybe a potential love interest. I’m into anime,outdoor activities, and working out; I’m with the vibes to try new things 💯",
    },
    {
      isImage: true,
      uri: require(img_1),
      prompt: "If money didn't exist, I would travel to: ",
      response: "Dubai! Dubai has the craziest worlds largest water slide!",
    },
    {
      isImage: true,
      uri: require(img_2),
      prompt: "Biggest turn offs",
      response: "Smelly feet...go somewhere and clean yourself",
    },

    {
      isImage: true,
      uri: require(img_4),
      prompt: "My favorite meal is: ",
      response: "Oxtail, goes crazy with Mac and Cheese and Rice and Peas",
    },

  ];
  const [name, setName] = React.useState("Tasha Beacon");
  const [age, setAge] = React.useState(22);
  return (
    <SafeAreaView style={styles.container}>

      
      <View
        style={{
          // marginTop: 20,
          width: "100%",
          height:"100%",
          alignItems: "center",
          justifyContent: "space-between",
          // backgroundColor:"red"
        }}
      >

         <View style={{ width: "100%", height: "100%",  }}>
            <SwipeDeck content={DATA} />
          </View>
                  {/* This is the card  holder
        <View style={styles.card_container}>
          <View style={styles.name_age_container}>
            <Name_Age _name={name} _age={age} />
          </View>
          <View style={{ width: "100%", height: "100%",  }}>
            <SwipeDeck content={DATA} />
          </View>
        </View> */}

        {/* <View style={styles.action_btn_continer}>
          <No_Like_Icon />
          <Story_Button />
          <Like_Icon />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default MatchingView;
