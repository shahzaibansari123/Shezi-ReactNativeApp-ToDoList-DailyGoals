import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'

const Footer = () => {
  const navigation=useNavigation()
  return (
    <View style={{
        padding: 30,
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        flexDirection: "row",
    }}>
      <TouchableOpacity>
        <Icon name="home" color="#900" size={30} onPress={()=>navigation.navigate("home")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" color="#900" size={30} onPress={()=>navigation.navigate("profile")}/>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;