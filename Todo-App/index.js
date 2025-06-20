import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native-web";

export default function TodoApp() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    ...styles.text,
                    fontSize: 24,
                    color: "black",
                    fontWeight: "bold",
                    marginBottom: 20,
                    borderBottom: "2px solid black",
                }}
            >
            TODO APP
            </Text>
            <TextInput style={styles.input} placeholder="Title" />
            <TextInput style={styles.input} placeholder="Description" />
            <TouchableOpacity style={{ ...styles.submitBtn }}>
                <Text style={{ ...styles.text, color: "white", fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.dividerLine} />
            <View style={styles.filterContainer}>
                <TouchableOpacity style={{ ...styles.filterBtn }}>
                    <Text style={{ ...styles.text, color: "black", fontSize: 16 }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.filterBtn }}>
                    <Text style={{ ...styles.text, color: "black", fontSize: 16 }}>Active</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.filterBtn }}>
                    <Text style={{ ...styles.text, color: "black", fontSize: 16 }}>Done</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     },
// });
