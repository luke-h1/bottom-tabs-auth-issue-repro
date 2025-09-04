import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { ComponentProps, useMemo } from "react";
import { useColorScheme } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import { usePopulateAuth } from "../hooks/usePopulateAuth";
import { TabNavigator, TabParamList } from "./TabNavigator";
import { TopStackNavigator, TopStackParamList } from "./TopStackNavigator";
import { BaseConfig } from "./config";
import { useBackButtonHandler } from "./navigationUtilities";

/**
 * This type allows TypeScript to know what routes are defined in this navigator as
 * well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *  * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */

export type AppStackParamList = {
  // tabs
  Tabs: NavigatorScreenParams<TabParamList>;

  // streams

  // categories
  Categories: undefined;
  Category: { id: string };

  // Top
  Top: NavigatorScreenParams<TopStackParamList>;

  // login screen
  Login: undefined;
};

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const { exitRoutes } = BaseConfig;

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  usePopulateAuth();
  const { ready } = useAuthContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Top" component={TopStackNavigator} />
    </Stack.Navigator>
  );
};

type NavigationProps = Partial<ComponentProps<typeof NavigationContainer>>;

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName));

  const navTheme = useMemo(() => {
    const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

    return {
      ...theme,
      colors: {
        ...theme.colors,
      },
    };
  }, [colorScheme]);

  return (
    <NavigationContainer theme={navTheme} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
