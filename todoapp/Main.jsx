import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Footer from "./components/Footer";
import Register from "./screens/Register";
import Cameraa from "./screens/Cameraa";
import {loadUser} from './redux/action'


const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch=useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser())

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cameraa"
          component={Cameraa}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      <Footer />
    </NavigationContainer>
  );
};

export default Main;
