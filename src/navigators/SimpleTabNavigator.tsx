import { createNativeBottomTabNavigator } from "@bottom-tabs/react-navigation";
import React from "react";
import { SimpleHomeStack } from "./SimpleHomeStack";
import { SimpleSettingsStack } from "./SimpleSettingsStack";

export type SimpleTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createNativeBottomTabNavigator<SimpleTabParamList>();

export function SimpleTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SimpleHomeStack} />
      <Tab.Screen name="Settings" component={SimpleSettingsStack} />
    </Tab.Navigator>
  );
}
