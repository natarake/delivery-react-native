import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Home from "../screens/Home";
import TabNavigator from "./TabNavigator";
import Map from "../screens/Map";
import DrawerNavigator from "./DrawerNavigator";
import SearchResult from "../screens/SearchResult";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
