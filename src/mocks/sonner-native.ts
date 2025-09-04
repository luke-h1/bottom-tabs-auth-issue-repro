// Mock sonner-native toast
export const toast = {
  error: (message: string) => {
    console.error("[TOAST ERROR]", message);
  },
  success: (message: string) => {
    console.log("[TOAST SUCCESS]", message);
  },
  info: (message: string) => {
    console.info("[TOAST INFO]", message);
  },
};
