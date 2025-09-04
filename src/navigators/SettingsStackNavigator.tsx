import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SettingsDetailsScreen } from "../screens/SettingsDetailsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

export type SettingsStackParamList = {
  Settings: undefined;
  SettingsDetails: undefined;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="SettingsDetails"
        component={SettingsDetailsScreen}
      />
    </SettingsStack.Navigator>
  );
}
