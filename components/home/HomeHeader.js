import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = ({ navigation }) => {
  return (
    <View className="bg-[#ff8c52] h-[10em] flex-row items-center justify-between gap-4 px-4 py-2">
      <View>
        <Ionicons
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View>
        <Text className="text-white font-bold text-2xl">FoodTrip.</Text>
      </View>
      <View className="relative">
        <Ionicons name="cart" size={24} color="white" />
        <View className="absolute -top-2 -right-2 bg-red-600 h-4 w-4 rounded-full items-center justify-center">
          <Text className="text-white text-xs font-bold">0</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
