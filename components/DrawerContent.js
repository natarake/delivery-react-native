import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, Image, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DrawerContent = (props) => {
  return (
    <View className="flex-1">
      <DrawerContentScrollView>
        <View className="bg-[#ff8c52] p-4 ">
          <View className="flex-row items-center justify-around">
            <View className="bg-white h-16 w-16 rounded-full items-center justify-center">
              <Image
                source={{
                  uri: "https://png.pngitem.com/pimgs/s/218-2182769_faceless-male-avatar-in-suit-clip-arts-male.png",
                }}
                className="h-14 w-14 rounded-full"
                resizeMode="contain"
              />
            </View>
            <View>
              <Text className="text-white font-bold">Nata Noob</Text>
              <Text className="text-white">test@test.com</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-around mt-2">
            <View className="items-center">
              <Text className="text-white font-bold">1</Text>
              <Text className="text-white">My Favorites</Text>
            </View>
            <View className="items-center">
              <Text className="text-white font-bold">0</Text>
              <Text className="text-white">Shopping Cart</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="tag-heart"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="lifebuoy" size={size} color={color} />
          )}
        />
        <View className="border-t-2 border-gray-100">
          <Text className="text-gray-500 pt-2 pl-5">Preferences</Text>
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-gray-600 pl-5">Dark Theme</Text>
            <Switch trackColor={{ false: "#767577", true: "#ff8c52" }} />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name="logout-variant"
            size={size}
            color={color}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;
