import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Search from "../screens/Search";
import SearchResult from "../screens/SearchResult";
import Restaurant from "../screens/Restaurant";
import MenuDetails from "../screens/MenuDetails";

const SearchStack = createNativeStackNavigator();

const ClientNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Restaurant") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="MenuDetails"
        component={MenuDetails}
        options={{
          headerShown: false,
        }}
      />
    </SearchStack.Navigator>
  );
};

export default ClientNavigator;
