import {
  createContext,
  ReactNode,
  use,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface AuthContextState {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  ready: boolean;
}

export const AuthContext = createContext<AuthContextState | undefined>(
  undefined
);

export type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, setState] = useState<
    Omit<AuthContextState, "setAuthenticated">
  >({
    ready: false,
    authenticated: false,
  });

  const onAuth = useCallback(({ val }: { val: boolean }) => {
    setState((prev) => ({
      ...prev,
      authenticated: val,
    }));
  }, []);

  const contextState: AuthContextState = useMemo(() => {
    return {
      ready: state.ready,
      authenticated: state.authenticated,
      setAuthenticated: onAuth,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.authenticated]);

  return state.ready ? (
    <AuthContext.Provider value={contextState}>{children}</AuthContext.Provider>
  ) : null;
};

export function useAuthContext() {
  const context = use(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
}
