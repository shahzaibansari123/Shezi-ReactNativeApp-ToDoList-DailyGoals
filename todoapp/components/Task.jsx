import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import  Icon from 'react-native-vector-icons/AntDesign'

const Task = ({ title, description, status, taskId }) => {
  const [completed, setCompleted] = useState(status);

  const handleCompleted=()=>{
    setCompleted(!completed)
  }
  const handleDelete=()=>{
   console.log("task Deleted")
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskDescription}>{description}</Text>
      </View>
      <Checkbox onPress={handleCompleted}  status={completed ? "checked" : "unchecked"} color="#474747"/>
      <Icon name="delete" color="#fff"  size={20} style={styles.dltIcon} onPress={handleDelete} />
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
    width: 100,
  },
  taskTitle:{
    marginVertical: 3,
    fontSize: 20,
    color: '#900',
  },
  taskDescription:{
    color: "red",
    // fontSize: 10,
  },

  dltIcon:{
    backgroundColor: "#900",
    borderRadius: 50,
    padding: 10,


  }
});
