import React from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

const Login = ({ navigation }) => {
  return (
    <View>
      <Header name="back" title="my account" navigation={navigation} />
      <View className="p-2">
        <Text className="p-2 text-xl font-bold text-[#ff8c52] tracking-wide">
          Sign-in
        </Text>
        <Text className="text-center text-gray-400">
          Please enter the name and password
        </Text>
        <Text className="text-center text-gray-400">
          registered with your account.
        </Text>
      </View>
      <View>
        <TextInput
          className="h-12 p-4 m-4 border border-gray-300 rounded-lg"
          placeholder="Email"
        />
        <TextInput
          className="h-12 p-4 mx-4 border border-gray-300 rounded-lg"
          placeholder="Password"
        />
        <Text className="text-start underline text-xs text-gray-400 px-4 py-2 underline-offset-2">
          Forgot Password?
        </Text>
      </View>
      <Button
        title="Sign In"
        color="bg-[#ff8c52]"
        onPress={() => navigation.navigate("DrawerNavigator")}
      />
      <Text className="text-center font-black mt-8">OR</Text>
      <Button
        title="Sign in with Facebook"
        name="facebook"
        color="bg-[#1778f2]"
      />
      <Button title="Sign in with Google" name="google" color="bg-[#de5246]" />
      <Text className="text-start underline text-xs text-gray-400 px-4 py-2 underline-offset-2">
        Doesn't have an account yet?
        <Text className="italic text-[#1778f2]"> Register here.</Text>
      </Text>
    </View>
  );
};

export default Login;
