import { View, Text, Platform, StatusBar } from "react-native";
import React from "react";
// import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation }) => {
  // const navigation= useNavigation()
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* ======================= */}
      {/* setting status bar height manully as safe area view doesnot work in android   */}
      {/* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='light-content'
        // showHideTransition={statusBarTransition}
        hidden={false}
         /> */}
      {/* ======================= */}

      {/* <Text onPress={()=> navigation.navigate("login")}>Home</Text> */}
      <Text>Home</Text>
    </View>
  );
};

export default Home;
