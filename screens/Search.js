import React, { useRef, useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FeaturedCategories } from "../data";
import { useNavigation } from "@react-navigation/native";
import filter from "lodash/filter";
import SearchCard from "../components/search/SearchCard";

const Search = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([...FeaturedCategories]);
  const [focused, setFocused] = useState(true);
  const textInput = useRef(0);

  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const search = filter(FeaturedCategories, (searchTerm) => {
      return contains(searchTerm, text);
    });
    setData([...search]);
  };

  return (
    <View className="mb-16 flex-1">
      <View className="items-center">
        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
          <View className="flex-row items-center border-gray-400 border-[1px] rounded-xl h-12 w-11/12 mt-4 p-2">
            <Ionicons name="search" color="gray" size={24} />
            <Text className="text-gray-500">What are you looking for?</Text>
          </View>
        </TouchableWithoutFeedback>
        <Modal animationType="fade" transparent={false} visible={open}>
          <View className="flex-1 mt-4 px-2">
            <View className="flex-row justify-center h-12 px-3">
              <View className="border-[1px] rounded-xl border-[#86939e] flex-row justify-evenly items-center content-center px-3">
                <Animatable.View
                  animation={focused ? "fadeInRight" : "fadeInLeft"}
                  duration={400}
                >
                  <Ionicons
                    name={focused ? "arrow-back" : "search"}
                    color="gray"
                    size={24}
                    onPress={() => {
                      if (focused) setOpen(false);
                      setFocused(true);
                    }}
                  />
                </Animatable.View>
                <TextInput
                  placeholder=""
                  autoFocus={false}
                  ref={textInput}
                  style={{ width: "90%" }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onChangeText={handleSearch}
                />
                <Animatable.View
                  animation={focused ? "fadeInLeft" : ""}
                  duration={400}
                >
                  <MaterialIcons
                    name={focused ? "cancel" : null}
                    color="gray"
                    size={24}
                    onPress={() => {
                      textInput.current.clear();
                      handleSearch();
                    }}
                  />
                </Animatable.View>
              </View>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss;
                    navigation.navigate("Search", { item: item.name });
                    setOpen(false);
                    setFocused(true);
                  }}
                >
                  <View className="mt-3 mx-2">
                    <Text className="text-gray-500 p-1">{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      </View>
      <SearchCard />
    </View>
  );
};

export default Search;
