import React from "react";
import styles from "./SwipeDeckStyles";
import { Name_Age, No_Like_Icon, Like_Icon } from "../../components/atoms";
import {
  StatusBar,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  Animated,
} from "react-native";
import {
  Directions,
  FlingGestureHandler,
  State,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Card } from "_organisms";

function SwipeDeck({ content, name, age }) {
  let degreeOfMotion = 0;
  let animatedValue = new Animated.Value(0);
  const logoPath = require("_assets/images/Peek_Logo.png");
  const [data, setData] = React.useState(content);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const VISIBLE_ITEMS = 3;
  const [index, setIndex] = React.useState(0);

  const setActiveIndex = React.useCallback((activeIndex) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });

  let frontInterporlate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();

    animatedValue.addListener(({ value }) => {
      degreeOfMotion = value;
    });
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterporlate }],
    position: "absolute",
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
  }

  // Uncomment this if you want to scroll through an endless loop of a users profile
  // React.useEffect(() => {
  //   if (index === data.length - VISIBLE_ITEMS) {
  //     const newDATA = [...data, ...data];
  //     setData(newDATA);
  //   }
  // });

  const Item = ({ item, index }) => {
    const inputRange = [index - 1, index, index + 1];
    const translateY = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [50, 0, -100],
    });

    const scale = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.819, 1, 1.3],
    });

    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
    });
    return (
      // This secondary Animated view is for positioning the stack to the middle of the screen
      //To make vertical change MarginLeft to MarginTop: screenHeight /2 and set horizontal to false
      <Animated.View style={styles.outerAnimatedView}>
        <Animated.View
          style={{
            flex: 1,
            position: "absolute",
            width: screenWidth * 0.8,
            height: screenHeight * 0.55,
            opacity,
            transform: [{ translateY }, { scale }],
          }}
        >
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Card details={item} />
          </Animated.View>

          <Animated.View style={[styles.flipCard, backAnimatedStyle]}>
            <Image style={styles.imageStyle} source={item.uri} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        FlingGestureHandler
        key="down"
        direction={Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={"dark-content"} />

          <View style={styles.card_container}>
            <View style={styles.name_age_container}>
              <Name_Age _name={name} _age={age} />
            </View>

            <FlatList
              scrollEnabled={false} //this is because were going to do an animated scroll
              removeClippedSubviews={false} //this is because we want to make items visible on android
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                //this purpose of this compoment is that its the wrapper of the renderedItem. This allows the first item to have the largest index and transition in descreasing order
                const newStyle = [style, { zIndex: data.length - index }];
                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              style={styles.flatListStyle}
              contentContainerStyle={{ flex: 1,  }}
              pagingEnabled={true}
              data={data}
              renderItem={Item}
              keyExtractor={(_, index) => String(index)}
            />
          </View>

          <View style={styles.action_btn_continer}>
            <No_Like_Icon />

            <TouchableOpacity onPress={() => flipCard() }>
              <Image style={styles.logoStyle} source={logoPath} />
            </TouchableOpacity>

            <Like_Icon />
          </View>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

export default SwipeDeck;
