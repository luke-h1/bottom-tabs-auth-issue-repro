import { type ErrorInfo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

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

const styles = StyleSheet.create((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    alignItems: "center",
    marginBottom: theme.spacing.lg,
  },
  heading: {
    marginBottom: theme.spacing.md,
  },
  toggleStackTrace: {
    color: "blue",
    marginVertical: theme.spacing.md,
  },
  errorSection: {
    flex: 2,
    backgroundColor: theme.colors.accent.accent,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.lg,
    borderRadius: 6,
  },
  errorSectionContentContainer: {
    // padding: theme.spacing.md,
  },
  errorBackTrace: {
    marginTop: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.colors.red.accent,
  },
  resetButton: {
    backgroundColor: theme.colors.red.accent,
    paddingHorizontal: theme.spacing.lg,
  },
}));
