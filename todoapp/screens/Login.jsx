import { View, Text, TextInput } from "react-native";
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
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
    </View>
  );
};

export default Login;
