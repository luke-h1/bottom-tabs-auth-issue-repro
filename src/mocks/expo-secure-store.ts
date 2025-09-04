import { load, remove, save } from "../utils/async-storage";

// Mock expo-secure-store using AsyncStorage
export const setItemAsync = async (
  key: string,
  value: string
): Promise<void> => {
  console.log("Mock SecureStore: Setting item", key);
  await save(key, value);
};

export const getItemAsync = async (key: string): Promise<string | null> => {
  console.log("Mock SecureStore: Getting item", key);
  return await load<string>(key);
};

export const deleteItemAsync = async (key: string): Promise<void> => {
  console.log("Mock SecureStore: Deleting item", key);
  await remove(key);
};
