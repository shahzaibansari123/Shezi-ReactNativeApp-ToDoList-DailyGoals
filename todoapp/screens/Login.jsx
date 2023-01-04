import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import background from "../assets/background.jpeg";
import { useDispatch } from "react-redux";

// import { useNavigation } from "@react-navigation/native";

const Login = ({ navigation }) => {

  // const navigation = useNavigation();
  
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    console.log("login");
  };

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#000",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={Styles.heading}>Welcome</Text>
        <View style={{ width: "70%" }}>
          <TextInput
            placeholder="Email"
            style={Styles.inputFields}
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry
            style={Styles.inputFields}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          disabled={!email || !password}
          style={Styles.btn}
          onPress={loginHandler}
        >
          <Text style={Styles.btnTxt}>Login</Text>
        </Button>
        <Text
          style={{
            marginTop: 20,
            fontFamily: "sans-serif-condensed",
            fontWeight: "bold",
            color: "#fff",
            fontSize: 20,
          }}
        >
          or
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              color: "lightgray",
              height: 30,
              margin: 20,
              fontFamily: "sans-serif-condensed",
              fontWeight: "bold",
              textDecorationLine: "underline",
              fontSize: 16,
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    // </View>
  );
};

export default Login;

const Styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    // fontStyle: "italic",
  },
  inputFields: {
    borderWidth: 1,
    color: "black",
    backgroundColor: "white",
    fontSize: 12,
    // marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "transparent",
    fontFamily: "sans-serif-condensed",
  },
  btn: {
    backgroundColor: "#0098A6",
    width: "70%",
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
  btnTxt: {
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
    // fontStyle: "italic",
    fontSize: 16,
  },
});
