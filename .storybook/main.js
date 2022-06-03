/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    config.module?.rules.push({
      test: /\.scss$/,
      use: [
        "vue-style-loader",
        {
          loader: "css-loader",
          options: {
            modules: { localIdentName: "[local]_[hash:base64:5]" },
          },
        },
        {
          loader: "sass-loader",
        },
      ],
    });
    return config;
  },
};

module.exports = config;
