import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RestaurantCard = ({ imgUrl }) => {
  return (
    <TouchableOpacity className="bg-gray-50 shadow-2xl rounded-md mr-3">
      <Image
        source={{ uri: imgUrl }}
        className="h-36 w-64 rounded-t-md"
        resizeMode="contain"
      />
      <View className="px-3 pb-2">
        <Text className="font-bold text-lg pt-2">McDonalds</Text>
        <View className="flex-row items-center space-x-1 my-[2px]">
          <MaterialCommunityIcons name="star" size={16} color="#ff8c52" />
          <Text className="text-[#ff8c52] text-xs font-medium">4.5</Text>
          <Text className="text-gray-500 text-xs">·</Text>
          <Text className="text-gray-500 text-xs font-medium">69 Reviews</Text>
        </View>
        <View className="flex-row space-x-1">
          <MaterialCommunityIcons name="map-marker" size={16} color="gray" />
          <Text className="text-gray-500 text-xs font-medium">21 Min</Text>
          <Text className="text-gray-500 text-xs">·</Text>
          <Text className="text-gray-500 text-xs font-medium">
            123 Main St.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
