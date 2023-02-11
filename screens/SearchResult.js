import React from "react";
import { View, Text, FlatList } from "react-native";
import ResultCard from "../components/search/ResultCard";
import { restaurantsData } from "../data";

const SearchResult = ({ navigation, route }) => {
  return (
    <View className="flex-1">
      <View>
        <FlatList
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ResultCard
              image={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              onPress={() =>
                navigation.navigate("Restaurant", {
                  id: index,
                  restaurant: item.restaurantName,
                })
              }
            />
          )}
          ListHeaderComponent={
            <Text className="p-3 text-gray-500 font-bold text-lg">
              {restaurantsData.length} Results for {route.params.item}
            </Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResult;
