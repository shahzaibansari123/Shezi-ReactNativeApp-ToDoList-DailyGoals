import { SafeAreaView, Text } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'



// const FocusedStatusBar = (props) => {
//   const isFocused= useIsFocused()
//   return isFocused ? <StatusBar animated={true} {...props} /> : null
// }

const Home = ({navigation}) => {
    // const navigation= useNavigation()
  return (
    <SafeAreaView style={{ flex: 1}} >
       {/* <FocusedStatusBar background={"black"}/> */}
       <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='light-content'
        // showHideTransition={statusBarTransition}
        hidden={false}
        

         />
      {/* <Text onPress={()=> navigation.navigate("login")}>Home</Text> */}
    <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home