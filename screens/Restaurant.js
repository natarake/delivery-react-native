import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import RestaurantHeader from "../components/search/RestaurantHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabBar, TabView } from "react-native-tab-view";
import { restaurantsData } from "../data";
import Menu from "./Menu";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;

const Restaurant = ({ navigation, route }) => {
  const { id } = route.params;
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "MENU" },
    { key: "second", title: "INFO" },
    { key: "third", title: "REVIEWS" },
    { key: "fourth", title: "GALLERY" },
  ]);

  const UpdateRoute = () => {
    return <View></View>;
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      tabStyle={{ width: SCREEN_WIDTH / 4, maxHeight: 45 }}
      scrollEnabled={true}
      style={{
        backgroundColor: "#ff8c52",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      contentContainerStyle={{
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
      labelStyle={{ fontStyle: "bold", color: "white" }}
    />
  );

  const menuPressed = () => {
    navigation.navigate("MenuDetails");
  };

  return (
    <View className="flex-1">
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantsData[id].discount && (
            <View className="items-center justify-center p-1 bg-white shadow-2xl mb-1">
              <Text className="text-green-500 font-bold">
                GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
              </Text>
            </View>
          )}
          <View className="flex-row flex-1 mb-2 mx-3 justify-between">
            <View className="flex-[8]">
              <Text className="font-bold text-gray-500 text-xl">
                {restaurantsData[id].restaurantName}
              </Text>
              <Text className="text-gray-500">
                {restaurantsData[id].foodType}
              </Text>
              <View className="flex-row items-center mt-[5px]">
                <MaterialCommunityIcons name="star" size={16} color="gray" />
                <Text className="text-gray-500 ml-1 text-xs">
                  {restaurantsData[id].averageReview}
                </Text>
                <Text className="text-gray-500 ml-1 mr-2 text-xs">
                  ({restaurantsData[id].numberOfReview})
                </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={16}
                  color="gray"
                />
                <Text className="font-bold text-gray-500 text-xs">Away</Text>
              </View>
            </View>
            <View className="flex-[3] items-center justify-between">
              <Text className="text-sm text-gray-500 font-bold">Pick-up</Text>
              <View className="w-10 h-10 items-center rounded-full justify-around bg-slate-200 shadow-2xl">
                <Text className="font-bold mt-1">
                  {restaurantsData[id].collectTime}
                </Text>
                <Text className="text-xs mb-1">Min</Text>
              </View>
            </View>
            <View className="flex-[3] items-center justify-between">
              <Text className="text-sm text-gray-500 font-bold">Delivery</Text>
              <View className="w-10 h-10 items-center rounded-full justify-around bg-[#ff8c52]">
                <Text className="font-bold text-white mt-1">
                  {restaurantsData[id].deliveryTime}
                </Text>
                <Text className="text-xs mb-1 text-white">Min</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={UpdateRoute}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            tabBarPosition="top"
            renderTabBar={renderTabBar}
          />
        </View>
        {index === 0 && <Menu onPress={menuPressed} />}
      </ScrollView>
      <TouchableOpacity>
        <View className="bg-[#ff8c52] h-14 content-center justify-center">
          <View className="flex-row justify-between items-center">
            <Text className="px-1 font-bold text-lg text-white ml-3">
              View Cart
            </Text>
            <View className="border-[1px] mr-3 border-white rounded-full">
              <Text className="px-2 font-bold text-lg text-white">0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Restaurant;
