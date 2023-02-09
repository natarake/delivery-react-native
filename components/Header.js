import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, name, navigation }) => {
  return (
    <View>
      <View className="bg-[#ff8c52] h-[10em] flex-row items-center gap-4 p-2">
        <AntDesign
          name={name}
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text className="text-white font-bold text-xl uppercase">{title}</Text>
      </View>
    </View>
  );
};

export default Header;
