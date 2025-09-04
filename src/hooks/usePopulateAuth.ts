import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useAppNavigation } from "./useAppNavigation";

export function usePopulateAuth() {
  const { populateAuthState, authState, ready } = useAuthContext();
  const { navigate } = useAppNavigation();

  // Initial auth population
  useEffect(() => {
    void populateAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navigation based on auth state changes
  useEffect(() => {
    if (!ready || !authState) return;

    /**
     * Logged in - navigate user to following tab
     */
    if (authState.isLoggedIn) {
      navigate("Tabs", {
        screen: "Following",
      });
    }

    /**
     * We've acquired a token, and the user is not logged in
     * Navigate them to the Top stack since `Following` won't
     * be available
     */
    if (authState.isAnonAuth && !authState.isLoggedIn) {
      navigate("Tabs", {
        screen: "Top",
      });
    }
  }, [ready, authState, navigate]);
}
