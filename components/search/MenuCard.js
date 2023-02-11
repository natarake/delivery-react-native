import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MenuCard = ({ productName, image, price, productDetails }) => {
  return (
    <View style={styles.shadow}>
      <View className="flex-1 flex-row justify-between">
        <View className="flex-[6] justify-between">
          <Text>MenuCard</Text>
          <Text>MenuCard</Text>
          <Text>MenuCard</Text>
        </View>
        <View>
          <Image className="flex-1" />
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "white",
    elevation: 4,
    shadowOpacity: 0.4,
    shadowColor: "black",
    margin: 5,
    padding: 10,
  },
});
