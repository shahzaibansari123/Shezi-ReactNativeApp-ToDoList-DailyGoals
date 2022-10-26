import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";

import Profile from "./screens/Profile";
import Footer from "./components/Footer";

const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="profile" component={Profile} />


      </Stack.Navigator>

    <Footer />
    </NavigationContainer>
     
  );
};

export default Main;
