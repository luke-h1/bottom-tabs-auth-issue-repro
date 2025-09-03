import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { SettingsIndexScreen } from "../screens/SettingsScreen";

export type SettingsStackParamList = {
  Index: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export type SettingsStackScreenProps<T extends keyof SettingsStackParamList> =
  StackScreenProps<SettingsStackParamList, T>;

export function SettingsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Index" component={SettingsIndexScreen} />
    </Stack.Navigator>
  );
}
