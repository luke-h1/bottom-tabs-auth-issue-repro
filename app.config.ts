import type { ExpoConfig } from "@expo/config";

interface AppVariantConfig {
  name: string;
  icon: string;
  androidPackageName: string;
  splashImage: string;
  splashBackgroundColor: string;
  iosBundleIdentifier: string;
}

type Variant = "development" | "preview";

// https://docs.expo.dev/tutorial/eas/multiple-app-variants
const APP_VARIANT_CONFIG: Record<Variant, AppVariantConfig> = {
  development: {
    name: "Bottom Tabs Auth Issue Repro (dev)",
    icon: "./assets/images/react-logo.png",
    iosBundleIdentifier: "bottom-tabs-repro-dev",
    androidPackageName: "com.lhowsam.bottom-tabs-repro.dev",
    splashImage: "./assets/images/react-logo.png",
    splashBackgroundColor: "#000000",
  },
  preview: {
    name: "Bottom Tabs Auth Issue Repro (preview)",
    icon: "./assets/images/react-logo.png",
    iosBundleIdentifier: "bottom-tabs-repro-preview",
    androidPackageName: "com.lhowsam.bottom-tabs-repro.preview",
    splashImage: "./assets/images/react-logo.png",
    splashBackgroundColor: "#000000",
  },
} as const;

const variant = (process.env.APP_VARIANT as Variant) || "preview";

const VERSION = "0.0.1";

const appConfig = APP_VARIANT_CONFIG[variant];

const config: ExpoConfig = {
  name: appConfig.name,
  slug: "bottom-tabs-repro",
  newArchEnabled: true,
  version: VERSION,
  scheme: "foam",
  owner: "lukehowsam123",
  icon: "./assets/images/react-logo.png",
  userInterfaceStyle: "dark",
  splash: {
    image: appConfig.splashImage,
    resizeMode: "contain",
    backgroundColor: appConfig.splashBackgroundColor,
  },
  updates: {},
  runtimeVersion: {
    policy: "appVersion",
  },
  extra: {
    updates: {
      assetPatternsToBeBundled: ["**/*"],
    },
    eas: {
      projectId: "950a1e2f-6b25-4be7-adb2-3c16287a2b5e",
    },
  },
  plugins: [
    "react-native-bottom-tabs",
    "expo-secure-store",
    [
      "expo-font",
      {
        fonts: [
          "node_modules/@expo-google-fonts/source-code-pro/400Regular",
          "node_modules/@expo-google-fonts/source-code-pro/600SemiBold",
          "node_modules/@expo-google-fonts/source-code-pro/700Bold",
        ],
        android: {
          fonts: [
            {
              fontFamily: "SourceCodePro",
              fontDefinitions: [
                {
                  path: "node_modules/@expo-google-fonts/source-code-pro/400Regular/SourceCodePro_400Regular.ttf",
                  weight: 400,
                },
                {
                  path: "node_modules/@expo-google-fonts/source-code-pro/600SemiBold/SourceCodePro_600SemiBold.ttf",
                  weight: 600,
                },
                {
                  path: "node_modules/@expo-google-fonts/source-code-pro/700Bold/SourceCodePro_700Bold.ttf",
                  weight: 700,
                },
              ],
            },
          ],
        },
      },
    ],
    "react-native-edge-to-edge",
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
          extraPods: [],
        },
      },
    ],
  ],
  experiments: {
    tsconfigPaths: true,
  },
  web: {},
  ios: {
    supportsTablet: false,
    bundleIdentifier: appConfig.iosBundleIdentifier,
    icon: appConfig.icon,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      NSSupportsLiveActivities: true,
    },
    entitlements: {},
  },
  android: {
    package: appConfig.androidPackageName,
    edgeToEdgeEnabled: true,
  },
};

export default config;
