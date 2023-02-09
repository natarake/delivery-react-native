import React from "react";
import { View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";

const Featured = () => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">Featured</Text>
        <AntDesign name="arrowright" size={24} color="#ff8c52" />
      </View>
      <Text className="text-xs text-gray-400 px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eum!
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        <RestaurantCard imgUrl="https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg" />
        <RestaurantCard imgUrl="https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg" />
        <RestaurantCard imgUrl="https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg" />
        <RestaurantCard imgUrl="https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg" />
      </ScrollView>
    </View>
  );
};

export default Featured;
