import type { StorybookConfig } from "@storybook/core-common";

const config: StorybookConfig = {
    stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
        disableTelemetry: true,
    },
};

module.exports = config;
