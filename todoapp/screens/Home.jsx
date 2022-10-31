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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      {Platform.OS === "android" && <StatusBar backgroundColor="#0098A6" />}
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
          <Icon size={30} name="add" color="#fff" />
        </TouchableOpacity>
      </View>
      <Dialog
        visible={openDialog}
        onDismiss={handleDialog}
        style={styles.addDialog}
      >
        <Dialog.Title
          style={{ fontFamily: "sans-serif-condensed", color: "#fff" }}
        >
          Add Something To Do
        </Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.inputFields}
            placeholder="Title"
            placeholderTextColor="black" 
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.inputFields}
            placeholder="Description"
            placeholderTextColor="black"
            value={description}
            // onChangeText={setDescription}
            onChangeText={setDescription}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button color="black" onPress={addTask}>
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
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "IOS" ? 0 : null,
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "Black",
    backgroundColor: "#0098A6",
    textTransform: "uppercase",
  },
  addBtn: {
    backgroundColor: "#0098A6",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    elevation: 20,
    borderRadius: 100,
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
  },
  addDialog: {
    borderRadius: 10,
    backgroundColor: "#0098A6",
    color: "#fff",

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
