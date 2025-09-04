import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SettingsDetailsScreen } from "../screens/SettingsDetailsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

export type SettingsStackParamList = {
  Settings: undefined;
  SettingsDetails: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export function SimpleSettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SettingsDetails" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
}
