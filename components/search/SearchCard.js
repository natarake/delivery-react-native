import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FeaturedCategories } from "../../data";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SearchCard = ({ navigation }) => {
  return (
    <View className="mt-4">
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={FeaturedCategories}
        ListHeaderComponent={
          <Text style={styles.listHeader}>Featured Categories</Text>
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("SearchResult", { item: item.name })
            }
          >
            <View style={styles.imageView}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.image}
              >
                <View style={styles.textView}>
                  <Text className="text-white">{item.name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
  },

  listHeader: {
    fontSize: 16,
    paddingBottom: 10,
    marginLeft: 12,
    color: "gray",
  },

  textView: {
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52,52,52,0.3)",
  },
});
