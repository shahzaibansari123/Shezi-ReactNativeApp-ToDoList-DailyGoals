import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const Register = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar.Image
        size={200}
        style={{ backgroundColor: "#900" }}
        source={{ uri: avatar ? avatar : null }}
      />
      <TouchableOpacity onPress={imagehandler}>
        <Text style={{ backgroundColor: "#900" }}>Change your Image</Text>
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
          style={Styles.inputFields}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your Password"
        />
      </View>
      
    </View>
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
