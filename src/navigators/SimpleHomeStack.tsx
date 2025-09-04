import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DetailsScreen } from "../screens/DetailsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
  Profile: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export function SimpleHomeStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}
