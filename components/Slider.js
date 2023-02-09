import React from "react";
import { View, Image } from "react-native";

const Slider = ({ item }) => {
  return (
    <View className="items-center">
      <Image
        source={item.img}
        className="h-[240px] w-screen object-cover"
        resizeMode="contain"
      />
    </View>
  );
};

export default Slider;
