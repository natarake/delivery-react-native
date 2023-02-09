import React, { useRef, useState } from "react";
import { View, Text, FlatList, Animated } from "react-native";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Slider from "../components/Slider";
import { Slides } from "../data.js";

const Welcome = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View className="justify-between h-full">
      <View className="mt-8">
        <Text className="uppercase text-center text-2xl text-[#ff8c52] font-black">
          Discover restaurants
        </Text>
        <Text className="uppercase text-center text-2xl text-[#ff8c52] font-black">
          in your area
        </Text>
      </View>

      <View>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <Slider item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={Slides} scrollX={scrollX} index={index} />
      </View>

      <View>
        <Button
          title="Sign In"
          color="bg-[#ff8c52]"
          onPress={() => navigation.navigate("Login")}
        />
        <Button title="Create Account" color="bg-slate-400" />
      </View>
    </View>
  );
};

export default Welcome;
