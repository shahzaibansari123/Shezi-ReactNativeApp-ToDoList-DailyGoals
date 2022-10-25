import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Ionicons";
import { Button, Dialog } from "react-native-paper";
// import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  // const navigation= useNavigation()

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const addTask = () => {
    console.log(title, description);
    console.log("Task Added");
  };

  const tasks = [
    {
      title: "task 01",
      description: "Sample text",
      completed: false,
      _id: "jsdhaskjdhk",
    },
    {
      title: "task 02",
      description: "Sample text",
      completed: true,
      _id: "jssdsdsddhaskjdhk",
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView>
            <Text style={styles.heading}>All Tasks:</Text>

            {tasks.map((item) => (
              <Task
                key={item._id}
                title={item.title}
                description={item.description}
                completed={item.completed}
                taskId={item._id}
              />
            ))}
          </SafeAreaView>
        </ScrollView>
        <TouchableOpacity style={styles.addBtn} onPress={handleDialog}>
          <Icon size={20} name="add" color="#900" />
        </TouchableOpacity>
      </View>
      <Dialog
        visible={openDialog}
        onDismiss={handleDialog}
        style={styles.addDialog}
      >
        <Dialog.Title>Add Something To Do</Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.inputFields}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.inputFields}
            placeholder="Description"
            value={description}
            // onChangeText={setDescription}
            onChangeText={setDescription}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button color="#900" onPress={addTask}>
              Add
            </Button>
            <TouchableOpacity onPress={handleDialog}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#900",
  },
  addBtn: {
    backgroundColor: "#fff",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    elevation: 10,
    borderRadius: 100,
  },
  inputFields: {
    borderWidth: 1,
    backgroundColor: "lightgray",
    fontSize: 12,
    // marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "transparent",
  },
  addDialog: {
    borderRadius: 10,
    // elevation: 30
  },
});

export default Home;

// =======================
//    setting status bar height manully as safe area view doesnot work in android
//    <StatusBar
//     animated={true}
//     backgroundColor="#61dafb"
//     barStyle='light-content'
//     showHideTransition={statusBarTransition}
//     hidden={false}
//      />
//   =======================

//   <Text onPress={()=> navigation.navigate("login")}>Home</Text>
