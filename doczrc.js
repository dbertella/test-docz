import { createPlugin } from "docz-core";

const importFix = () =>
  createPlugin({
    onCreateWebpackConfig: ({ actions }) => {
      const path = require("path");
      actions.setWebpackConfig({
        resolve: {
          modules: [path.resolve(__dirname, "../src"), "node_modules"],
          alias: {
            "@": path.resolve(__dirname, "../src"),
          },
        },
      });
    },
  });

const config = {
  plugins: [importFix()],
};

export default config;
