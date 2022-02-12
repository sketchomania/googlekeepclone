import { createContext } from "react";
import { theme } from "../../tailwind.config";

export const themes = {
  dark: " dark ",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});
