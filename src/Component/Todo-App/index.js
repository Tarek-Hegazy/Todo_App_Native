import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from "react-native";
import { styles } from "./styles";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NavigationContainer} from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux";
import todosSlicer, { setAllTodos } from "./Redux/TodosSlicer";

const TodoApp = ()=> {

  const todos = useSelector((state) => state.todosState.todos);
  const dispatch = useDispatch();

  // const [todos, setTodos] = useState(select);

  useEffect(()=>{
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem("todos");
        if (data !== null) {
          dispatch(setAllTodos(JSON.parse(data)));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  },[]);

  useEffect(()=>{
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch(e){
        console.log(e);
        
      }
    }
    saveData();
  },[todos])

  // console.log(AsyncStorage.getItem("todos"));
  



  // fun to get todo from todoForm
  // const addTodo = (todo) => {
  //   dispatch(addNewTodo(todo))
  // }
  // const deleteTodo = (todo) => {
  //   dispatch(removeTodo(todo.id))
  // }
  // const completeTodo = (todo) => {
  //   dispatch(completedTodo(todo.id))
  // }

  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.complete;
    if (filter === "done") return todo.complete;
    return true;
  });
  return (
      <View style={styles.container}>
      <Text
        style={{
          ...styles.text,
          fontSize: 24,
          color: "black",
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 40,
          borderBottom: "2px solid black",
        }}
      >
        TODO APP
      </Text>
      {/* Here we send add fun to get it in form page and add todo to */}
      <TodoForm/>
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterBtn, filter === "all" && styles.activeFilterBtn]}
          onPress={() => {
            setFilter("all");
          }}
        >
          <Text
            style={[
              styles.text,
              { color: "black", fontSize: 16 },
              filter === "all" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "active" && styles.activeFilterBtn,
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: "black", fontSize: 16 },
              filter === "active" && styles.activeFilterText,
            ]}
            onPress={() => {
              setFilter("active");
            }}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "done" && styles.activeFilterBtn,
          ]}
          onPress={() => {
            setFilter("done");
          }}
        >
          <Text
            style={[
              styles.text,
              { color: "black", fontSize: 16 },
              filter === "done" && styles.activeFilterText,
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList
        todos={filteredTodos}
      />
      <StatusBar style="auto" />
      </View>
  );
}

export default TodoApp;
// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     },
// });


