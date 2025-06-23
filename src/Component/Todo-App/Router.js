import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

import TodoDetails from "./TodoDetails";
import StackNavigator from "./StackNavigator";

// import StackNavigator from "./StackNavigator";
import TodoApp from "./index";
import CompletedTasks from "./CompletedTasks";

const Tab = createBottomTabNavigator();

export const PATHS = {
  HOME: "Home Page",
  COMPLETE_TASKS: "Completed Tasks",
  DETAILS: "TodoDetails",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 1,
            borderTopColor: "#ddd",
            height: 50,
            paddingBottom: 10,
            // paddingTop: 8,
          },
        }}
      >
        <Tab.Screen
          name={PATHS.HOME}
          component={StackNavigator}
          options={{
            headerTitle: "Home Page",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "black",
            },
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Home
              </Text>
            ),
            headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="home"
                size={size}
                color={focused ? "black" : color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={PATHS.COMPLETE_TASKS}
          component={CompletedTasks}
          options={{
            headerTitle: "Completed Tasks",
            headerTitleAlign: "center",
            headerTitleStyle : {
              fontWeight:"bold"
            },
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Tasks
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="task"
                size={size}
                color={focused ? "black" : color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
