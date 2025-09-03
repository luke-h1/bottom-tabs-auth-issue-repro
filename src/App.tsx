import { AppNavigator } from "./navigators/AppNavigator";
import { useNavigationPersistence } from "./navigators/navigationUtilities";
import { Providers } from "./Providers/Providers";
import * as storage from "./utils/async-storage";

function App() {
  const {
    // initialNavigationState,
    onNavigationStateChange,
    // isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, "NAVIGATION_STATE");

  return (
    <Providers>
      <AppNavigator onStateChange={onNavigationStateChange}></AppNavigator>
    </Providers>
  );
}
export default App;
