import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductCard from "./ProductCard";

const ResultCard = ({
  restaurantName,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  image,
  productData,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        className="bg-white shadow-2xl rounded-md mx-2"
        onPress={onPress}
      >
        <Image
          source={{ uri: image }}
          className="h-36 w-full rounded-t-md"
          resizeMode="contain"
        />
        <View className="px-3 pb-2">
          <Text className="font-bold text-lg pt-2">{restaurantName}</Text>
          <View className="flex-row items-center space-x-1 my-[2px]">
            <MaterialCommunityIcons name="star" size={16} color="#ff8c52" />
            <Text className="text-[#ff8c52] text-xs font-medium">
              {averageReview}
            </Text>
            <Text className="text-gray-500 text-xs">·</Text>
            <Text className="text-gray-500 text-xs font-medium">
              {numberOfReview}
            </Text>
          </View>
          <View className="flex-row space-x-1">
            <MaterialCommunityIcons name="map-marker" size={16} color="gray" />
            <Text className="text-gray-500 text-xs font-medium">{farAway}</Text>
            <Text className="text-gray-500 text-xs">·</Text>
            <Text className="text-gray-500 text-xs font-medium">
              {businessAddress}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <FlatList
          data={productData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProductCard
              image={item.image}
              productName={item.name}
              price={item.price}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ResultCard;
