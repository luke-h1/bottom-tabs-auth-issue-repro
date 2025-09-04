import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { TopCategoriesScreen } from "./TopCategories";
import { TopStreamsScreen } from "./TopStreamsScreen";

export function TopScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);

  const [routes] = useState([
    { key: "streams", title: "Streams" },
    { key: "categories", title: "Categories" },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentTitle] = useState<string>("Streams");

  const renderScene = SceneMap({
    streams: TopStreamsScreen,
    categories: TopCategoriesScreen,
  });

  // Theme colors as constants
  const colors = {
    plumBorder: "#8B5CF6",
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <View style={styles.tabContainer}>
            {props.navigationState.routes.map((route, i) => {
              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => {
                    props.jumpTo(route.key);
                    setCurrentTitle(route.title);
                  }}
                  style={[
                    styles.tab,
                    {
                      borderBottomColor:
                        index === i ? colors.plumBorder : "transparent",
                    },
                  ]}
                >
                  <Text>{route.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  tab: {
    marginTop: 2,
    borderBottomWidth: 2.15,
    padding: 5,
    marginHorizontal: 10,
  },
});
