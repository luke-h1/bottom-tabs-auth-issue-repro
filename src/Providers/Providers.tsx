import { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { AuthContextProvider } from "../context/AuthContext";
import { useRecoveredFromError } from "../hooks/useRecoveredFromError";
import { BaseConfig } from "../navigators/config";

export function Providers({ children }: PropsWithChildren) {
  const { setRecoveredFromError } = useRecoveredFromError();

  return (
    <AuthContextProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary
          catchErrors={BaseConfig.catchErrors}
          onReset={() => setRecoveredFromError(true)}
        >
          <GestureHandlerRootView style={styles.gestureContainer}>
            {children}
          </GestureHandlerRootView>
        </ErrorBoundary>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create(() => ({
  gestureContainer: { flex: 1 },
}));
