// Mock expo-auth-session types and functions
export interface TokenResponse {
  accessToken: string;
  expiresIn?: number;
  tokenType: string;
}

export interface AuthSessionResult {
  type: "success" | "error" | "cancel" | "dismiss";
  authentication?: TokenResponse;
  error?: any;
}
