import { View, Text } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native'

const Home = ({navigation}) => {
    // const navigation= useNavigation()
  return (
    <View style={{backgroundColor: "white", flex: 1}}>
      {/* <Text onPress={()=> navigation.navigate("login")}>Home</Text> */}
    <Text>Home</Text>
    </View>
  )
}

export default Home