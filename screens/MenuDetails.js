import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { menu } from "../data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabBar, TabView } from "react-native-tab-view";
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "../components/search/MenuTabs";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MenuDetails = ({ navigation, route }) => {
  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      tabStyle={{ width: SCREEN_WIDTH / 4, maxHeight: 45 }}
      scrollEnabled={true}
      style={{
        paddingTop: 0,
        backgroundColor: "#ff8c52",
        justifyContent: "space-between",
      }}
      contentContainerStyle={{
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
      labelStyle={{ fontStyle: "bold", color: "white" }}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <Route1 navigation={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;

      default:
        return null;
    }
  };

  return (
    <View className="flex-1 top-0">
      <View className="flex-row items-center p-3 bg-[#ff8c52] pt-6 top-0 left-0 right-0 pt-6">
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        <Text>Menu</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        tabBarPosition="top"
        renderTabBar={renderTabBar}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MenuDetails;
