import { PropsWithChildren } from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { AuthContextProvider } from "../context/AuthContext";

// Mock query client
export const queryClient = {
  invalidateQueries: async () => {
    console.log("Mock: Invalidating queries");
  },
  resetQueries: async () => {
    console.log("Mock: Resetting queries");
  },
};

export function Providers({ children }: PropsWithChildren) {
  return (
    <AuthContextProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        {children}
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
