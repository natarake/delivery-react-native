import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import { FeaturedCategories } from "../../data";
import { AntDesign } from "@expo/vector-icons";

const Categories = () => {
  const [activeCat, setActiveCat] = useState("Fast Food");

  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">Categories</Text>
        <AntDesign name="arrowright" size={24} color="#ff8c52" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
      >
        {FeaturedCategories.map((item) => (
          <CategoryCard
            imgUrl={item.image}
            title={item.name}
            key={item.id}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
