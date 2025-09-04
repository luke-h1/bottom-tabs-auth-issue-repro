import { type ErrorInfo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface ErrorDetailsProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  onReset: () => void;
}

export function ErrorDetails(props: ErrorDetailsProps) {
  const { error, errorInfo, onReset } = props;
  const [showStackTrace, setShowStackTrace] = useState(false);
  return (
    <>
      <View style={styles.topSection}>
        <Text style={styles.heading}>Something went wrong</Text>
        <Text>
          Try resetting or restarting the app & see if that helps. If not, feel
          free to file an issue on GitHub and we&apos;ll take a look
        </Text>
      </View>
      <TouchableOpacity onPress={() => setShowStackTrace(!showStackTrace)}>
        <Text style={styles.toggleStackTrace}>
          {showStackTrace ? "Hide Stack Trace" : "Show Stack Trace"}
        </Text>
      </TouchableOpacity>
      {showStackTrace && (
        <ScrollView
          style={styles.errorSection}
          contentContainerStyle={styles.errorSectionContentContainer}
        >
          <Text>{error?.message.trim()}</Text>
          <Text selectable style={styles.errorBackTrace}>
            {errorInfo?.componentStack?.trim()}
          </Text>
        </ScrollView>
      )}
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        Reset
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  heading: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  toggleStackTrace: {
    color: "blue",
    marginVertical: 16,
  },
  errorSection: {
    flex: 2,
    backgroundColor: "#007AFF",
    marginBottom: 16,
    marginTop: 24,
    borderRadius: 6,
  },
  errorSectionContentContainer: {
    padding: 16,
  },
  errorBackTrace: {
    marginTop: 16,
  },
  button: {
    backgroundColor: "#FF3B30",
  },
  resetButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
