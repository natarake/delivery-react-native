import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ productName, price, image }) => {
  return (
    <View className="bg-white my-2 mx-1 w-[210px] p-2" style={styles.shadow}>
      <View className="flex-row p-0 justify-between">
        <View className="justify-around w-[110px]">
          <Text className="text-gray-500">{productName}</Text>
          <Text className="text-gray-500">₱ {price}</Text>
        </View>
        <View className="w-20 h-16">
          <Image source={{ uri: image }} className="h-16 w-20" />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowOpacity: 0.4,
    shadowColor: "black",
  },
});
