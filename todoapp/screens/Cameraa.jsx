import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


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
  const [camera, setCamera] = useState(null);



  if (!permission) {
    return <Text>No Access to Camera</Text>;
  }

  if (!permission.granted) {
    // requestPermission(false)
    return <View />;
  }

  // const toggleCameraType = () => {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // };

  const ImagePicker=()=>{

  }

  const clickPicture=()=>{
    
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera type={type} style={{ flex: 1 , aspectRatio: 1}} ratio="1:1" ref={(e)=> setCamera(e)} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            bottom: 10,
            position: "absolute",
          }}
        >
          <Icon name="image" size={40} color="#fff" onPress={ImagePicker}/>
          <Icon name="camera" size={40} color="#fff" onPress={clickPicture}/>
          <Icon name="flip-camera-android" size={40} color="#fff" onPress={()=> setType(type === CameraType.back ? CameraType.front : CameraType.back)}/>
          </View>
      
    </View>
  );
};

export default Cameraa;

const styles = StyleSheet.create({});
