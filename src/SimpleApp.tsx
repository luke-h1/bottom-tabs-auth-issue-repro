import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SimpleTabNavigator } from "./navigators/SimpleTabNavigator";

export default function SimpleApp() {
  return (
    <NavigationContainer>
      <SimpleTabNavigator />
    </NavigationContainer>
  );
}
