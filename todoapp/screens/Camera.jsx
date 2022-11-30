import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Camera = () => {

   








  const [type, setType] = useState(CameraType.back);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) ... 

  if (!permission.granted) ... 

  function toggleCameraType() {

    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));

  }

  return (

    <View style={styles.container}>

      <Camera style={styles.camera} type={type}>

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>

            <Text style={styles.text}>Flip Camera</Text>

          </TouchableOpacity>

        </View>

      </Camera>

    </View>

  );
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({})


