import React from "react";
import { styles } from "./styles";
import {useSelector } from "react-redux";
import todosSlicer  from "./Redux/TodosSlicer";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-web";
import TodoItem from "./TodoItem";

const CompletedTasks = () => {
  const todos = useSelector((state) => state.todosState.todos);
    return (
      <ScrollView
        style={{...styles.todosContainer}}
        showsVerticalScrollIndicator={false}
      >
        {/* <View style={{...styles.container}}> */}
          <FlatList
            data={todos.filter((item) => item.complete == true)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TodoItem todo={item} />}
          />
        {/* </View> */}
      </ScrollView>
    );
}
export default CompletedTasks;