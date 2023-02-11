import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { specialData, menuData } from "../data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = ({ onPress }) => {
  return (
    <View className="flex-1">
      <View>
        {specialData.map((items) => (
          <View key={items.key}>
            <TouchableOpacity onPress={onPress}>
              <View className="flex-row items-center border-b-[1px] border-gray-200 p-3">
                <MaterialCommunityIcons name="star" size={16} color="gold" />
                <Text className="text-gray-500 text-lg font-bold">
                  {items.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View>
        {menuData.map((items) => (
          <View key={items.key}>
            <TouchableOpacity onPress={onPress}>
              <View className="flex-row items-center border-b-[1px] border-gray-200 p-3">
                <Text className="text-gray-500 text-lg font-bold">
                  {items.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Menu;
