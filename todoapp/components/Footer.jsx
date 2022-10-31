import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'

const Footer = () => {
  const navigation=useNavigation()
  return (
    <View style={{
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor: "#0098A6",
        flexDirection: "row",
    }}>
      <TouchableOpacity>
        <Icon name="home" color="#fff" size={30} onPress={()=>navigation.navigate("home")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" color="#fff" size={30} onPress={()=>navigation.navigate("profile")}/>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;