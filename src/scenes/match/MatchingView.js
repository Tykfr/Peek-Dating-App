import styles from "./MatchingStyles";
import React from "react";
import {Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




const MatchingView = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Hello world
            </Text>
            
            
        </SafeAreaView>   
    )
}

export default MatchingView;