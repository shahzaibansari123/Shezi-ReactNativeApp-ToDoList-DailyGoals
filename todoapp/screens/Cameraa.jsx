import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Cameraa = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission){
    return <Text>No Access to Camera</Text>
  }
  
  if (permission.granted){
    return <View />
  }

  const toggleCameraType=()=> {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View >
      <Camera type={type}>
        <View >
          <TouchableOpacity onPress={toggleCameraType}>
            <Text >Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default Cameraa;

const styles = StyleSheet.create({});
