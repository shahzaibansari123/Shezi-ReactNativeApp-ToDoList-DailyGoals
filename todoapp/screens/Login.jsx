import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    console.log("login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={Styles.heading}>Welcome</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          placeholder="Email"
          style={Styles.inputFields}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          style={Styles.inputFields}
          placeholder="Password"
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
      <Text style={{ marginTop: 20 }}>or</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ color: "#900", height: 30, margin: 30 }}>Signup</Text>
      </TouchableOpacity>
    </View>
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
  },
  btn: {
    backgroundColor: "#0098A6",
    width: "70%",
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
  btnTxt:{
    fontFamily: "sans-serif-condensed",
    // fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
    // fontStyle: "italic",
  }
});
