import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
// import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation }) => {
  // const navigation= useNavigation()

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
        <Text style={}>All Tasks:</Text>
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
  heading: {},
});

export default Home;
