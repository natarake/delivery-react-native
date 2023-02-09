import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientNavigator from "./ClientNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BusinessConsole from "../screens/BusinessConsole";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="ClientNavigator"
        component={ClientNavigator}
        options={{
          title: "Client",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? "#7cc" : "#5e6977"}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="BusinessConsole"
        component={BusinessConsole}
        options={{
          title: "Business Console",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="business"
              color={focused ? "#7cc" : "#5e6977"}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
