import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

const Cameraa = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [camera, setCamera] = useState(null);

  const [image, setImage] = useState(null);

  if (!permission) {
    return <Text>No Access to Camera</Text>;
  }

  if (!permission.granted) {
    return <View />;
  }

  const clickPicture = async () => {
    const data = await camera.takePictureAsync();
    // console.log(data.uri)

    navigation.navigate("Register", { image: data.uri });
  };

  const ImagePicker = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        type={type}
        style={{ flex: 1, aspectRatio: 1 }}
        ratio="1:1"
        ref={(e) => setCamera(e)}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          bottom: 10,
          position: "absolute",
        }}
      >
        <Icon name="image" size={40} color="#fff" onPress={ImagePicker} />
        <Icon name="camera" size={40} color="#fff" onPress={clickPicture} />
        <Icon
          name="flip-camera-android"
          size={40}
          color="#fff"
          onPress={() =>
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            )
          }
        />
      </View>
    </View>
  );
};

export default Cameraa;

const styles = StyleSheet.create({});

// older ways to implement Camera component

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
