import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import  Icon from 'react-native-vector-icons/AntDesign'

const Task = ({ title, description, status, taskId }) => {
  const [completed, setCompleted] = useState(status);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskDescription}>{description}</Text>
      </View>
      <Checkbox status={completed ? "checked" : "unchecked"} color="#474747"/>
      <Icon name="delete" color="#fff"  size={20} style={styles.dltIcon}/>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  taskContainer: {
    width: '20%',
  },
  taskTitle:{
    marginVertical: 7,
    fontSize: 70,
    color: '#900',
  },
  taskDescription:{
    color: "red",
    fontSize: 40,
  },

  dltIcon:{
    

  }
});
