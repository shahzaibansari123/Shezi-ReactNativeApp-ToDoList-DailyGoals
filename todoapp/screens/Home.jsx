import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import Task from "../components/Task";
// import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation }) => {
  // const navigation= useNavigation()

  const tasks = [{title: "task 01", description: "Sample text", completed: false, _id: "jsdhaskjdhk" },
  {title: "task 02", description: "Sample text", completed: true, _id: "jssdsdsddhaskjdhk" }];

  return (
    // =======================
    //    setting status bar height manully as safe area view doesnot work in android
    //    <StatusBar
    //     animated={true}
    //     backgroundColor="#61dafb"
    //     barStyle='light-content'
    //     showHideTransition={statusBarTransition}
    //     hidden={false}
    //      />
    //   =======================

    //   <Text onPress={()=> navigation.navigate("login")}>Home</Text>

    <View style={Styles.container}>
      <SafeAreaView>
        <Text style={Styles.heading}>All Tasks:</Text>

        {tasks.map((i, index) => (
          <Task key={index}   />
        ))}
      </SafeAreaView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
  },
});

export default Home;
