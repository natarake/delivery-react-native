import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import MyOrders from "../screens/MyOrders";
import MyAccount from "../screens/MyAccount";
import SearchNavigator from "./SearchNavigator";

const Tab = createBottomTabNavigator();

const ClientNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff8c52",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-list"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ClientNavigator;
