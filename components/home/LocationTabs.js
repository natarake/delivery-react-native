import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LocationTabs = () => {
  return (
    <View className="flex-row items-center mx-auto">
      <View className="flex-row bg-gray-200 m-4 rounded-full px-4 flex-[5] py-1">
        <View className="flex-row items-center justify-center mr-4 flex-[3]">
          <MaterialCommunityIcons name="map-marker" size={20} color="gray" />
          <Text className="ml-2">123 Main St.</Text>
        </View>
        <View className="flex-row items-center bg-white rounded-[30px] py-1 px-4 mr-4">
          <MaterialCommunityIcons
            name="clock-time-four"
            size={20}
            color="gray"
          />
          <Text className="ml-2">Now</Text>
        </View>
      </View>
      <View className="flex-1">
        <MaterialCommunityIcons name="tune" size={24} color="gray" />
      </View>
    </View>
  );
};

export default LocationTabs;
