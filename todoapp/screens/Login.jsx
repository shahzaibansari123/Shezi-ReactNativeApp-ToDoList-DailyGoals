import { View, Text, TextInput,TouchableOpacity, StyleSheet } from "react-native";
import React , {useState} from "react";
import { Button } from "react-native-paper";

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const loginHandler=()=>{
    console.log("login")
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, margin: 20 }}>Welcome</Text>
      <View style={{ width: "70%" }}>
        <TextInput 
          placeholder="Email" 
          style={Styles.input}
          value={email} 
          onChangeText={setEmail} 
        />
        <TextInput
          secureTextEntry
          style={Styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button disabled={!email || !password} style={Styles.addBtn} on onPress={loginHandler}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </Button>
      <Text style={{marginTop: 20}}>or</Text>
      <TouchableOpacity onPress={()=>navigate.navigate("register")}>
        <Text style={{color: "#900", height: 30, margin: 30}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "black",

    flex: 1,
    paddingTop: Platform.OS === "IOS" ? 0 : null,
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#0098A6",
    // backgroundColor: "#cc2b5e → #753a88",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
  addBtn: {
    backgroundColor: "#0098A6",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    elevation: 20,
    borderRadius: 100,
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
  addDialog: {
    borderRadius: 10,
    backgroundColor: "#0098A6",
    color: "#fff",

    // elevation: 30
  },
});
