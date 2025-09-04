import { type BottomTabBarProps } from "@bottom-tabs/react-navigation";
import { BlurView } from "expo-blur";
import { SFSymbol, SymbolView } from "expo-symbols";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { TabParamList } from "../navigators/TabNavigator";

const icons: Record<keyof TabParamList, SFSymbol> = {
  Following: "heart",
  Search: "sparkle.magnifyingglass",
  Settings: "gear",
  Top: "arrowshape.up",
};

export function TabBar(props: BottomTabBarProps) {
  const { descriptors, navigation, state } = props;
  const appNavigation = useAppNavigation();

  const gesture = Gesture.Pan().onEnd((event) => {
    if (event.translationX > 100) {
      runOnJS(appNavigation.goBack)();
    }
  });

  // Theme values as constants
  const colors = {
    grayAccent: "#888888",
    accentAccent: "#007AFF",
    grayBgAlpha: "rgba(128, 128, 128, 0.1)",
    grayBorder: "rgba(128, 128, 128, 0.3)",
    redAccent: "#FF3B30",
  };

  return (
    <GestureDetector gesture={gesture}>
      <BlurView
        intensity={75}
        style={styles.main}
        tint="systemThickMaterialDark"
      >
        {state.routes.map((route, index) => {
          const options = descriptors[route.key]?.options;
          const focused = state.index === index;

          // Type assertion to fix TS error: route.name is string, but we know it's keyof TabParamList
          const icon = icons[route.name as keyof TabParamList];

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              onLongPress={() => {
                navigation.emit({
                  target: route.key,
                  type: "tabLongPress",
                });
              }}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  canPreventDefault: true,
                  target: route.key,
                });
                if (!(focused || event.defaultPrevented)) {
                  navigation.navigate(route.name, route.params);
                }
              }}
            >
              {icon && <SymbolView name={icon} tintColor={colors.grayAccent} />}

              {options?.tabBarBadge && (
                <View style={styles.badge}>
                  <Text>{options.tabBarBadge}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    position: "absolute",
    transform: [{ translateX: 24 }, { translateY: 24 }],
  },
  main: {
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    borderTopColor: "rgba(128, 128, 128, 0.3)",
    borderTopWidth: StyleSheet.hairlineWidth,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    zIndex: 100,
  },
  tab: {
    alignItems: "center",
    flexGrow: 1,
    paddingBottom: 32 + 34, // xl + bottom inset approximation
    paddingHorizontal: 48,
    paddingTop: 24,
  },
});
