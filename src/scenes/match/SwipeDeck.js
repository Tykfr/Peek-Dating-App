import React from "react";
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  Animated
} from "react-native";
import { Directions, FlingGestureHandler, State } from "react-native-gesture-handler";
function SwipeDeck() {

  const imagePath = "../../assets/images/stock_photos/";
  const img_1 = imagePath + "img_1.jpg";
  const img_2 = imagePath + "img_2.jpg";
  const img_4 = imagePath + "img_4.jpg";
  const img_5 = imagePath + "img_5.jpg";
  const img_6 = imagePath + "img_6.jpg";
  const DATA = [
    {
    // id: "1",
    uri: require(img_1),
    },
    {
    // id: "2",
    uri: require(img_2),
    },
    {
    // id: "4",
    uri: require(img_4),
    },
];

const [data,setData] = React.useState(DATA);
    const scrollXIndex = React.useRef(new Animated.Value(0)).current;

    const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
    React.useEffect(()=>{
        Animated.spring(scrollXAnimated,{
            toValue: scrollXIndex,
            useNativeDriver:true,
        }).start();
    })

    React.useEffect(()=>{
      if(index === data.length - VISIBLE_ITEMS){
        const newDATA = [...data, ...data];
        setData(newDATA);
      }
    })


    const screenWidth = Dimensions.get("screen").width ;
    const screenHeight = Dimensions.get("screen").height;
    const VISIBLE_ITEMS = 3;
    const [index, setIndex] = React.useState(0);
    const setActiveIndex = React.useCallback((activeIndex) =>{
      setIndex(activeIndex);
      scrollXIndex.setValue(activeIndex);
    });


   const Item = ({ item, index }) => {
      const inputRange = [index - 1, index, index +1];
      const translateX =  scrollXAnimated.interpolate({
          inputRange,
          outputRange:[50, 0,-50]

      })
        // console.log(translateX)

      const scale = scrollXAnimated.interpolate({
        inputRange,
        outputRange:[.8, 1, 1.3]

    })

    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange:[1-1/VISIBLE_ITEMS, 1, 0]

  })
    // console.log(translateX)
    // console.log(scale)
    return (
      // This secondary Animated view is for positioning the stack to the middle of the screen
      //To make vertical change MarginLeft to MarginTop: screenHeight /2 and set horizontal to false
    <Animated.View style={{ backgroundColozr:"red", width:"100%", height:"100%", alignItems:"center", justifyContent:"center", position:"absolute", marginLeft:screenWidth/2}}> 
      <Animated.View
        style={{
          flex: 1,
          position:"absolute",
          width: screenWidth * .70, 
          height: screenHeight * .50,
          opacity,
          // borderRadius:33
          transform:[
            {translateX}, 
            {scale}
          ]
        }}
      >
        <Image style={{ width: "100%" ,  height:  "100%", borderRadius:33  }} source={item.uri} />
      </Animated.View>
        </Animated.View>
    );
  };

  return (
    <FlingGestureHandler
    key="left"
    direction={Directions.LEFT}
    onHandlerStateChange={ev => {
      if(ev.nativeEvent.state === State.END){
        // setActiveIndex()
        if(index === data.length -1){
          return;
        }
        setActiveIndex( index+1)        
      }
    }}>
      <FlingGestureHandler
      FlingGestureHandler
      key="right"
      direction={Directions.RIGHT}
      onHandlerStateChange={ev => {
        if(ev.nativeEvent.state === State.END){
          // setActiveIndex()
          if(index === 0){
            return;
          }
          setActiveIndex( index-1)        
        }
      }}
      >

   
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* <Card /> */}


      <FlatList
        horizontal={true}
        // inverted={true}
        scrollEnabled={false} //this is because were going to do an animated scroll
        removeClippedSubviews={false} //this is because we want to make items visible on android
        CellRendererComponent = {({item, index, children, style, ...props}) =>{ //this purpose of this compoment is that its the wrapper of the renderedItem. This allows the first item to have the largest index and transition in descreasing order
            const newStyle = [style, {zIndex: data.length - index}];
            return (
                <View style = {newStyle} index={index} {...props}> 
                {children}
                </View>
            )

        }}
        style={{backgroundColor:"blue",  width:screenWidth, height:screenHeight}}
        contentContainerStyle={{ flex:1,  }}
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

function Card() {
  const samplePrompt = "If money didn't exist, I would travel to: ";
  const sampleResponse =
    "Dubai! Dubai has the craziest worlds largest water slide!";
  const logoPath = "_assets/images/Peek_Logo.png";
  const imagePath = "../../assets/images/stock_photos/";
  const img_1 = imagePath + "img_1.jpg";
  return (
    <View style={styles.cardContainer}>

        <Image style={{borderRadius:33, width:"100%", height:"100%"}} source={require(img_1)}/>

        {/* <View>
      <View>
        <Text style={styles.promptText}> {samplePrompt} </Text>
        <View style={styles.dashedLine} />
      </View>

      <View>
        <Text
          style={styles.promptResponse}>
          {sampleResponse}
        </Text>
      </View>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={{ width: 75, height: 75, marginBottom: 15 }}
          source={require("_assets/images/Peek_Logo.png")}
        />
      </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"orange"
  },

  cardContainer: {
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.5,
    backgroundColor: "#E7E0D5",
    borderRadius: 33,
  },

  promptText: {
    fontSize:20,
    fontWeight:"bold",
    marginTop: 30,
    textAlign: "left",
    marginLeft: 20,
    marginBottom: 25,
    marginRight: 15,
  },
  promptResponse: {
    fontSize:20,
    marginTop: 30,
    textAlign: "left",
    marginLeft: 20,
    marginBottom: 25,
    marginRight: 15,
  },
  dashedLine:{
    width: "100%",
    borderStyle: "dashed",
    borderWidth: 0.5,
    borderRadius: 1,
    
  }
});



// import React from "react";
// import {
//   Text,
//   StyleSheet,
//   StatusBar,
//   View,
//   Image,
//   FlatList,
//   SafeAreaView,
//   Dimensions,
//   TouchableWithoutFeedback,
// } from "react-native";

// function SwipeDeckOld() {
//   const imagePath = "../../assets/images/stock_photos/";
//   const img_1 = imagePath + "img_1.jpg";
//   const img_2 = imagePath + "img_2.jpg";
//   const img_4 = imagePath + "img_4.jpg";
//   const img_5 = imagePath + "img_5.jpg";
//   const img_6 = imagePath + "img_6.jpg";
//     const screenWidth = Dimensions.get("screen").width ;
//   const screenHeight = Dimensions.get("screen").height;
//   const SPACING = 10
//   const DATA = [
//     {
//       id: "1",
//       uri: require(img_1),
//     },
//     {
//       id: "2",
//       uri: require(img_2),
//     },
//     {
//       id: "4",
//       uri: require(img_4),
//     },
//   ];

//   const Item = ({ item }) => {
//     return (
//       <View
//         style={{
//           flex: 1,
//         //   position:"absolute",
//           width: screenWidth, 
//           height: screenHeight,
//           backgroundColor:"purple",
//         //   justifyContent:"space-between" 
          
//         }}
//       >
//         <Image style={{  width: "100%" , 
//           height:  "100%"  }} source={item.uri} />
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle={"dark-content"} />

//       {/* <Card /> */}


//       <FlatList
//         // horizontal={true}
//         // inverted={true}
//         // scrollEnabled={false} //this is because were going to do an animated scroll
//         // removeClippedSubviews={false} //this is because we want to make items visible on android
//         // CellRendererComponent = {({item, index, children, style, ...props}) =>{ //this purpose of this compoment is that its the wrapper of the renderedItem. This allows the first item to have the largest index and transition in descreasing order
//         //     const newStyle = [style, {zIndex: DATA.length - index}];
//         //     return (
//         //         <View style = {newStyle} index={index} {...props}> 
//         //         {children}
//         //         </View>
//         //     )

//         // }}
//         style={{backgroundColor:"blue", width:screenWidth, height:screenHeight}}
//         // contentContainerStyle={{flex:1,  }}
//         pagingEnabled={true}
//         data={data}
//         renderItem={Item}
//         keyExtractor={item=>item.id}
        
//         />
//     </SafeAreaView>
//   );
// }