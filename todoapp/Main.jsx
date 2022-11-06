import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Footer from "./components/Footer";
import Register from "./screens/Register";

const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} />


      </Stack.Navigator>

    <Footer />
    </NavigationContainer>
     
  );
};

export default Main;
