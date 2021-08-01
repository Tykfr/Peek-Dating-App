import React from "react";
import styles from "./SwipeDeckStyles"
import {
  Text,
  StyleSheet,
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
} from "react-native-gesture-handler";
function SwipeDeck({content}) {


  const [data, setData] = React.useState(content);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;

  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  // Uncomment this if you want to scroll through an endless loop of a users profile
  // React.useEffect(() => {
  //   if (index === data.length - VISIBLE_ITEMS) {
  //     const newDATA = [...data, ...data];
  //     setData(newDATA);
  //   }
  // });

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const VISIBLE_ITEMS = 3;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });

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
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          marginTop: screenHeight / 3.2,
          backgroundColor:"blue"
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            position: "absolute",
            width: screenWidth * 0.7,
            height: screenHeight * 0.5,
            opacity,
            transform: [{ translateY }, { scale }],
          }}
        >
          {item.isImage === true && (
            <Image
              style={styles.imageStyle}
              source={item.uri}
            />
          )}

          {item.isImage === false && (
            <Card details = {item}/>
          )}
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
          {/* <Card/> */}

          <FlatList
            // horizontal={true}

            // inverted={true}
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
            contentContainerStyle={{ flex: 1 }}
            pagingEnabled={true}
            data={data}
            renderItem={Item}
            keyExtractor={(_, index) => String(index)}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

export default SwipeDeck;

function Card({ details }) {
  const logoPath = require("_assets/images/Peek_Logo.png");

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

      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={styles.logoStyle}
          source={logoPath}
        />
      </View>
    </View>
  );
}

