module.exports = (api) => {
  api.cache(true);

  const plugins = [
    // ORDER MATTERS - this must be always at the end
    "react-native-reanimated/plugin",
  ];

  return {
    presets: [["babel-preset-expo"]],
    plugins,
    env: {
      test: {
        presets: [
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
      },
    },
  };
};
