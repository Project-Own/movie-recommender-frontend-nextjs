import React, { useState, createContext, useMemo } from "react";
import { ThemeProvider, useMediaQuery } from "@material-ui/core";
import getTheme from "./themes/base";

export const CustomThemeContext = createContext({
  currentTheme: "light",
  setTheme: null,
});

const CustomThemeProvider = (props) => {
  const { children } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  let currentTheme;
  /*eslint-disable */
  useMemo(() => (currentTheme = prefersDarkMode ? "dark" : "light"), [
    prefersDarkMode,
  ]);
  /*eslint-enable */

  // Read current theme from localStorage
  if (typeof window !== "undefined") {
    currentTheme = localStorage.getItem("appTheme") || currentTheme;
  }
  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme);

  console.log("Theme name: " + themeName);
  // Retrieve the theme object by theme name
  const theme = getTheme(themeName);
  // Wrap _setThemeName to stor new theme names in localStorage

  let setThemeName;
  if (typeof window !== "undefined") {
    setThemeName = (name) => {
      localStorage.setItem("appTheme", name);
      _setThemeName(name);
    };
  } else {
    setThemeName = (name) => {
      _setThemeName("light");
    };
  }
  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
