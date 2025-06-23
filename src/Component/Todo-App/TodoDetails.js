// TodoDetails.js
import { Text, View } from "react-native";
import { styles } from "./styles";

const TodoDetails = ({ route }) => {
  const { todo } = route.params;

  return (
    <View style={[styles.container, { padding: 20 }]}>
      <Text style={[styles.label, { fontSize: 18, marginBottom: 10 }]}>
        Title:
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{todo.title}</Text>

      <Text style={[styles.label, { fontSize: 18, marginBottom: 10 }]}>
        Description:
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        {todo.description || "No description provided."}
      </Text>

      <Text style={[styles.label, { fontSize: 18, marginBottom: 10 }]}>
        Status:
      </Text>
      <Text style={{ fontSize: 16 }}>
        {todo.complete ? "✅ Completed" : "⌛ Not completed"}
      </Text>
    </View>
  );
};

export default TodoDetails;
