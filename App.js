import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator.js";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#ff8c52"} barStyle="light-content" />
      <AuthNavigator />
    </NavigationContainer>
  );
}
