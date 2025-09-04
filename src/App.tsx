import { NavigationContainer } from "@react-navigation/native";
import { SimpleTabNavigator } from "./navigators/SimpleTabNavigator";
import { Providers } from "./Providers/Providers";

function App() {
  // const {
  // initialNavigationState,
  // onNavigationStateChange,
  // isRestored: isNavigationStateRestored,
  // } = useNavigationPersistence(storage, "NAVIGATION_STATE");

  return (
    <Providers>
      <NavigationContainer>
        <SimpleTabNavigator />
      </NavigationContainer>
    </Providers>
  );
}

export default App;
