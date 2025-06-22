import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TodoDetails from "./TodoDetails";
import { styles } from "./styles";
const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  const navigation = useNavigation();

  const navigateToDetails = (todo) => {
    navigation.navigate("TodoDetails", { todo });
  };

  return (
    <TouchableOpacity onPress={() => navigateToDetails(todo)}>
      <View style={styles.todoItem}>
        <Text
          style={{
            ...styles.todotitle,
            fontSize: 20,
            fontWeight: "500",
            flex: 1,
            textDecorationLine: todo.complete ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Text>

        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              completeTodo(todo);
            }}
          >
            <Ionicons
              name={todo.complete ? "checkbox" : "square-outline"}
              size={22}
              color={todo.complete ? "green" : "gray"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              deleteTodo(todo);
            }}
          >
            <MaterialIcons name="delete" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
