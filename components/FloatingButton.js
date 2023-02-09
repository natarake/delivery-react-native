import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FloatingButton = ({ navigation }) => {
  return (
    <View className="absolute bottom-3 right-4 bg-gray-200/90 h-16 w-16 rounded-full justify-center items-center">
      <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <MaterialCommunityIcons name="google-maps" size={30} color="#ff8c52" />
        <Text className="text-xs text-center text-gray-500">Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
