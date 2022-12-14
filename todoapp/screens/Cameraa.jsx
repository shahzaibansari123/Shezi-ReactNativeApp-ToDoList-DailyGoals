import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Cameraa = () => {
  // const [permission, requestPermission] = useState(null);
  // const [type, setType] = useState(CameraType.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     requestPermission(status === "granted");
  //   })();
  // }, []);

  // if (!permission) {
  //   return <Text>No Access to Camera</Text>;
  // }

  // if (permission === null) {
  //   return <View />;
  // }

  // const toggleCameraType = () => {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // };

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <Text>No Access to Camera</Text>;
  }

  if (!permission.granted) {
    // requestPermission(false)
    return <View />;
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera type={type} style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            bottom: "10",
            position: "absolute",
          }}
        ></View>
      </Camera>
    </View>
  );
};

export default Cameraa;

const styles = StyleSheet.create({});