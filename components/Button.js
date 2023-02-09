import { Text, Pressable } from "react-native";
import React from "react";
import { Zocial } from "@expo/vector-icons";

const Button = ({ title, color, name, onPress }) => {
  return (
    <Pressable
      className={`flex flex-row  items-center justify-center ${color} px-4 py-2 my-4 rounded-xl mx-4 cursor-pointer`}
      onPress={onPress}
    >
      <Zocial name={name} size={20} color="white" />
      <Text className="text-white font-bold text-xl ml-1">{title}</Text>
    </Pressable>
  );
};

export default Button;
