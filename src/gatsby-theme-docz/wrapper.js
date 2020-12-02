import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "@/theme";
import { useConfig } from "docz";
import { merge } from "lodash/fp";

const Theme = ({ children }) => {
  const { themeConfig } = useConfig();
  return (
    <ThemeProvider theme={merge(themeConfig, theme)}>{children}</ThemeProvider>
  );
};

export default Theme;
