import React, { memo, ReactNode } from "react";
import { ThemeProvider } from "theme-ui";
// @ts-ignore this import is an alias and works only inside docz
import { theme } from "@/theme";
import { useConfig } from "docz";
import { merge } from "lodash/fp";

const Theme = memo(({ children }: { children: ReactNode }) => {
  const { themeConfig } = useConfig();
  return (
    <ThemeProvider theme={merge(themeConfig, theme)}>{children}</ThemeProvider>
  );
});

export default Theme;
