import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../constant/theme";
import ThemeContext from "./theme";

export default function Context({ children }: { children: any }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
