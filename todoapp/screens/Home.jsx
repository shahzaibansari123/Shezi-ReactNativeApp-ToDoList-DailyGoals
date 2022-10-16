import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Entypo";
import { Button, Dialog } from "react-native-paper";
// import { useNavigation } from '@react-navigation/native'

const Home = ({ navigation }) => {
  // const navigation= useNavigation()

  const tasks = [{title: "task 01", description: "Sample text", completed: false, _id: "jsdhaskjdhk" },
  {title: "task 02", description: "Sample text", completed: true, _id: "jssdsdsddhaskjdhk" }];

  return (
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
<>
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>All Tasks:</Text>

        {tasks.map((item) => (
          <Task key={item._id} title={item.title} description={item.description} completed={item.completed} taskId={item._id}   />
        ))}
      </SafeAreaView>

      <TouchableOpacity style={styles.addBtn}>
        <Icon size={20} name="add-to-list" color="#900"/>
      </TouchableOpacity>
    </View>
    <Dialog visible={true} style={styles.addDialog}>
      <Dialog.Title>Add Something To Do</Dialog.Title>
      <Dialog.Content>
        <TextInput style={styles.inputFields} placeholder="Title"/>
        <TextInput  style={styles.inputFields} placeholder="Description"/>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Button color="#900">
            Add
          </Button>
          <TouchableOpacity>
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
    backgroundColor: "black",
  },
  addBtn:{
    backgroundColor: "#fff",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 150,
    height: 50,
    elevation: 5,
    borderRadius: 100,

  },
  inputFields:{
    borderWidth: 1,
    backgroundColor: "lightgray",
    fontSize: 12,
    // marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "transparent",
    

    
  },
  addDialog:{
    borderRadius: 10,
    // elevation: 30
  }


});

export default Home;
