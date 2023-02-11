import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { menuDetailedData } from "../../data";
import MenuCard from "./MenuCard";

export function Route1() {
  return (
    <View className="flex-1">
      <View>
        <FlatList
          style={{ backgroundColor: "white" }}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <MenuCard
                productName={item.meal}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export const Route2 = () => <View />;
export const Route3 = () => <View />;
export const Route4 = () => <View />;
export const Route5 = () => <View />;
export const Route6 = () => <View />;
export const Route7 = () => <View />;
export const Route8 = () => <View />;
