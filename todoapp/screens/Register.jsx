import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register

const Styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    // fontStyle: "italic",
  },
  inputFields: {
    borderWidth: 1,
    color: "black",
    backgroundColor: "white",
    fontSize: 12,
    // marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "transparent",
    fontFamily: "sans-serif-condensed",
  },
  btn: {
    backgroundColor: "#0098A6",
    width: "70%",
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    
  },
  btnTxt: {
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
    // fontStyle: "italic",
    fontSize: 16,
    

  },
});
