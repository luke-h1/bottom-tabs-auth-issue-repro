// Mock logger service
export const logger = {
  auth: {
    error: (message: string, error?: any) => {
      console.error("[AUTH ERROR]", message, error);
    },
    warn: (message: string, error?: any) => {
      console.warn("[AUTH WARN]", message, error);
    },
    info: (message: string, ...args: any[]) => {
      console.info("[AUTH INFO]", message, ...args);
    },
  },
};
