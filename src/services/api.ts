// Mock API service
export const twitchApi = {
  setAuthToken: (token: string) => {
    console.log("Mock: Setting auth token:", token);
  },
  removeAuthToken: () => {
    console.log("Mock: Removing auth token");
  },
};
