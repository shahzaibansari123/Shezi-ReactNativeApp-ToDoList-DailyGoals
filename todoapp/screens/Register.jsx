import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "react-native-paper";
import dummyCam from "../assets/dummyCam.jpeg";
import background from "../assets/background.jpg";

const Register = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const imagehandler = () => {
    navigation.navigate("Cameraa");
  };

  const registerHandler = () => {
    console.log("register here");

    console.log(route.params.image);
  };

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }
  }, [route]);

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#000",
    //     // alignItems: "center",
    //     // justifyContent: "center",
    //   }}
    // >
    <ImageBackground
      source={background}
      resizeMode="stretch"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Avatar.Image
        size={200}
        style={{ backgroundColor: "#0098A6", margin: 10 }}
        // source={{ uri: avatar ? avatar : null}}
        source={avatar ? { uri: avatar } : dummyCam}
      />
      <TouchableOpacity onPress={imagehandler}>
        <Text style={Styles.btnTxt}>Upload an image</Text>
      </TouchableOpacity>
      <View style={{ width: "70%" }}>
        <TextInput
          style={Styles.inputFields}
          value={name}
          onChangeText={setName}
          placeholder="Enter your Name"
        />
        <TextInput
          style={Styles.inputFields}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your Email"
        />
        <TextInput
          secureTextEntry
          style={Styles.inputFields}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your Password"
        />
      </View>
      <Button
        disabled={!email || !password || !name}
        style={Styles.btn}
        onPress={registerHandler}
      >
        <Text style={Styles.btnTxt}>Register</Text>
      </Button>
      <View style={{ flexDirection: "row" }}>
        <Text style={Styles.btnTxt}>Already have an Account?</Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              fontFamily: "sans-serif-condensed",
              fontWeight: "bold",
              color: "#fff",
              textTransform: "capitalize",
              // fontStyle: "italic",
              fontSize: 16,
              marginLeft: 10,
              height: 30,
              textDecorationLine: "underline",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default Register;

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
