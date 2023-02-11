import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Animated } from "react-native";
import { restaurantsData } from "../../data";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantHeader = ({ navigation, id }) => {
  const currentValue = new Animated.Value(1);

  const [liked, setLiked] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleLike = () => {
    if (liked === false) setVisible(true);
    setLiked(!liked);
  };

  useEffect(() => {
    if (liked === true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);

  return (
    <View className="h-40 w-full">
      <ImageBackground
        source={{ uri: restaurantsData[id].images }}
        className="h-40"
      >
        <View className="flex-row items-baseline justify-between">
          <View className="m-3 w-10 h-10 items-center justify-center rounded-full bg-white">
            <MaterialIcons
              name="arrow-back"
              size={24}
              color="gray"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View className="m-3 w-10 h-10 items-center justify-center rounded-full bg-white">
            <MaterialIcons
              name={liked ? "favorite" : "favorite-border"}
              size={24}
              color="red"
              onPress={handleLike}
            />
          </View>
        </View>
        <View className="items-center justify-center">
          {visible && (
            <Animated.View style={{ transform: [{ scale: currentValue }] }}>
              <MaterialIcons
                name="favorite"
                size={40}
                color="red"
                type="material"
              />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default RestaurantHeader;
