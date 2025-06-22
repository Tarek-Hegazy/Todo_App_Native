import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoApp from "./index"; 
import TodoDetails from "./TodoDetails";
import { PATHS } from "./Router";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={PATHS.HOME} component={TodoApp} />
        <Stack.Screen name={PATHS.DETAILS} component={TodoDetails} />
      </Stack.Navigator>
    );
}

export default StackNavigator;