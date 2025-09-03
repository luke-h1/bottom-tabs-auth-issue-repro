import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import { useAppNavigation } from "../hooks/useAppNavigation";

export function SettingsIndexScreen() {
  const navigation = useAppNavigation();
  const { authenticated, ready, setAuthenticated } = useAuthContext();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>isAuthenticated? {JSON.stringify(authenticated, null, 2)}</Text>

      <TouchableOpacity
        onPress={() => {
          setAuthenticated(false);
          navigation.push("Tabs", {
            screen: "Top",
          });
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setAuthenticated(true);
          navigation.push("Tabs", {
            screen: "Following",
          });
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
