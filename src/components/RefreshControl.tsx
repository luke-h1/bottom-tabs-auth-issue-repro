import * as Haptics from "expo-haptics";
import { useCallback, useState } from "react";
import { RefreshControl as RNRefreshControl } from "react-native";
import { ThemeColor } from "../styles";

interface Props {
  color?: ThemeColor;
  offset?: number;
  onRefresh: () => Promise<unknown>;
}

export function RefreshControl({ onRefresh, color = "blue", offset }: Props) {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await onRefresh();
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setRefreshing(false);
  }, [onRefresh]);

  return (
    <RNRefreshControl
      onRefresh={refresh}
      progressViewOffset={offset}
      refreshing={refreshing}
    />
  );
}
