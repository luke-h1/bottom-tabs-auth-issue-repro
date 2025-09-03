import { Text, View } from "react-native";
import { useAppNavigation } from "../hooks/useAppNavigation";

// Component which implements a back button for the navigation bar
export function BackButton() {
  const navigation = useAppNavigation();

  if (navigation.canGoBack()) {
    return (
      <View>
        <Text>go back</Text>
      </View>
    );
  }

  return null;
}
