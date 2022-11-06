import { View, Text, TextInput, Button, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const Login = () => {
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
          style={StyleSheet.input}
          value={email} 
          onChangeText={setEmail} 
        />
        <TextInput
          secureTextEntry
          style={StyleSheet.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button disabled={!email || !password}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </Button>
      <Text style={{marginTop: 20}}>or</Text>
      <TouchableOpacity onPress={()=>navigate.navigate("register")}>
        <Text style={{color: "#900", height: 20, width: 30}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
