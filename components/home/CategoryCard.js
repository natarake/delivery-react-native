import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title, activeCat, setActiveCat }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveCat(title)}
      className={`${
        activeCat === title ? "bg-[#ff8c52]" : "bg-[#e2e2e2]"
      } shadow-lg p-2 rounded-xl mr-2 w-20`}
    >
      <Image
        source={{ uri: imgUrl }}
        className="w-[64px] h-[64px] rounded-full"
        resizeMode="contain"
      />
      <Text
        className={`${
          activeCat === title ? "text-white" : "text-[#ff8c52]"
        } text-xs font-bold text-center`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
