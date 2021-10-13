import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";

function FlipCard() {
  let degreeOfMotion = 0;

  let animatedValue = new Animated.Value(0);

  let frontInterporlate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  // });
  React.useEffect(() => {
    animatedValue.addListener(({ value }) => {
        
        degreeOfMotion = value;
        console.log(degreeOfMotion)
    });
    
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterporlate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  function flipCard() {
    if (degreeOfMotion >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }

    // }
  }
  return (
    <View style={styles.container}>
      {/* <Text> Hello </Text> */}
      <View>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <Text style={styles.flipText}>
            This text is flipping on the front
          </Text>
        </Animated.View>

        <Animated.View
          style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
        >
          <Text style={styles.flipText}>This text is flipping on the back</Text>
        </Animated.View>
      </View>

      <TouchableOpacity onPress={() => flipCard()}>
        <Text>Flip Me!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FlipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  flipCard: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    backfaceVisibility: "hidden",
  },

  flipCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },

  flipText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
});
