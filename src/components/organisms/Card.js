import React from "react";
import {View, Text} from "react-native"
import styles from "./SwipeDeckStyles";


function Card({ details }) {
    return (
      <View style={styles.cardContainer}>
        <View>
          <View>
            <Text style={styles.promptText}> {details.prompt} </Text>
            <View style={styles.dashedLine} />
          </View>
  
          <View>
            <Text style={styles.promptResponse}>{details.response}</Text>
          </View>
        </View>
      </View>
    );
  }

  export default Card;