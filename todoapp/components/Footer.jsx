import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/AntDesign'

const Footer = () => {
  return (
    <View style={{
        padding: 30,
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        flexDirection: "row",
    }}>
      <TouchableOpacity>
        <Icon name="home" color="#900" size={30} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" color="#900" size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default Footer