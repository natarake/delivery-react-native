import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Categories from "../components/home/Categories";
import Featured from "../components/home/Featured";
import HeaderTabs from "../components/home/HeaderTabs";
import HomeHeader from "../components/home/HomeHeader";
import LocationTabs from "../components/home/LocationTabs";
import CountDown from "react-native-countdown-component";
import FloatingButton from "../components/FloatingButton";

const Home = ({ navigation }) => {
  const [active, setActive] = useState("Delivery");
  return (
    <View>
      <ScrollView>
        <HomeHeader navigation={navigation} />
        <HeaderTabs
          active={active}
          setActive={setActive}
          navigation={navigation}
        />
        <LocationTabs />
        <Categories />
        <Featured />
        <View className="flex-row items-center mt-4">
          <Text className="ml-4 mr-2">Hurry! Offer ends in</Text>
          <CountDown
            until={3600}
            size={12}
            timeToShow={["M", "S"]}
            digitStyle={{ backgroundColor: "#66df48" }}
            digitTxtStyle={{ color: "white" }}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />
        </View>
        <Featured />
      </ScrollView>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default Home;
