import { View, Text } from "react-native";
import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import DrawerContent from "../components/DrawerContent";

const BusinessConsole = ({ navigation }) => {
  return (
    <View>
      <HomeHeader navigation={navigation} />
      <Text>BusinessConsole</Text>
    </View>
  );
};

export default BusinessConsole;
