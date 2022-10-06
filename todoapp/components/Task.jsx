import { StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'
import {checkbox} from 'react-native-paper'

const Task = ({title, description, status, taskId}) => {

  const [completed, setCompleted]= useState(status)

  return (
    <View>
      <Text>Task</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({})