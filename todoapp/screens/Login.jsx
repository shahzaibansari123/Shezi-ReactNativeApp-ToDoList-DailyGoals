import { View, Text, TextInput, Button } from "react-native";
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
        <TextInput placeholder="email" value={email} onChangeText={setEmail} />
        <TextInput
          secureTextEntry
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button disabled={!email || !password}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </Button>
    </View>
  );
};

export default Login;
