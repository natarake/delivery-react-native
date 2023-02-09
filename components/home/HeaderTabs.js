import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs({ active, setActive, navigation }) {
  return (
    <View className="flex-row justify-center mt-4">
      <TouchableOpacity
        className={`${
          active === "Delivery" ? "bg-[#ff8c52]" : "bg-[#e2e2e2]"
        } py-1 px-4 rounded-full`}
        onPress={() => setActive("Delivery")}
      >
        <Text
          className={`${
            active === "Delivery" ? "text-white" : "text-[#ff8c52]"
          } text-base font-bold`}
        >
          Delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`${
          active === "Pick-up" ? "bg-[#ff8c52]" : "bg-[#e2e2e2]"
        } py-1 px-4 rounded-full`}
        onPress={() => {
          setActive("Pick-up");
          navigation.navigate("Map");
        }}
      >
        <Text
          className={`${
            active === "Pick-up" ? "text-white" : "text-[#ff8c52]"
          } text-base font-bold`}
        >
          Pick-up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
