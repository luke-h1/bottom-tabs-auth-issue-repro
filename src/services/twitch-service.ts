export interface DefaultTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface UserInfoResponse {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email?: string;
  created_at: string;
}

export const twitchService = {
  getDefaultToken: async (): Promise<DefaultTokenResponse> => {
    // Mock implementation
    console.log("Mock: Getting default token");
    return {
      access_token: "mock_anon_token_123",
      expires_in: 3600,
      token_type: "bearer",
    };
  },

  validateToken: async (token: string): Promise<boolean> => {
    // Mock implementation - always return true for demo
    console.log("Mock: Validating token:", token);
    return true;
  },

  getUserInfo: async (token: string): Promise<UserInfoResponse> => {
    // Mock implementation
    console.log("Mock: Getting user info with token:", token);
    return {
      id: "12345",
      login: "mockuser",
      display_name: "Mock User",
      type: "user",
      broadcaster_type: "",
      description: "A mock user for testing",
      profile_image_url: "https://via.placeholder.com/150",
      offline_image_url: "https://via.placeholder.com/150",
      view_count: 0,
      email: "mock@example.com",
      created_at: "2023-01-01T00:00:00Z",
    };
  },
};
